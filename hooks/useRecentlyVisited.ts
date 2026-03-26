"use client";

import { useState, useEffect } from "react";

export interface RecentlyVisitedMovie {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number; // Movie rating
	release_date: string;
	year: number; // Release year
	visitedAt: string; // ISO date string for ordering
}

const STORAGE_KEY = "recentlyVisitedMovies";
const MAX_RECENT_MOVIES = 20; // Limit to prevent localStorage

export function useRecentlyVisited() {
	const [recentMovies, setRecentMovies] = useState<RecentlyVisitedMovie[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);
	// Load from localStorage on mount
	useEffect(() => {
		if (typeof window !== "undefined") {
			try {
				const stored = localStorage.getItem(STORAGE_KEY);
				if (stored) {
					const parsed = JSON.parse(stored);
					// Validate and clean data
					const validMovies = parsed.filter(
						(movie: unknown): movie is RecentlyVisitedMovie => {
							return (
								movie !== null &&
								typeof movie === "object" &&
								"id" in movie &&
								"title" in movie &&
								"visitedAt" in movie &&
								"release_date" in movie &&
								"year" in movie &&
								typeof (movie as RecentlyVisitedMovie).id === "number" &&
								typeof (movie as RecentlyVisitedMovie).title === "string" &&
								typeof (movie as RecentlyVisitedMovie).visitedAt === "string" &&
								!isNaN(
									new Date((movie as RecentlyVisitedMovie).visitedAt).getTime()
								) && // Ensure valid visitedAt date
								typeof (movie as RecentlyVisitedMovie).release_date ===
									"string" &&
								typeof (movie as RecentlyVisitedMovie).year === "number"
							);
						}
					);
					setRecentMovies(validMovies);
				}
			} catch (error) {
				console.error("Error loading recently visited movies:", error);
			} finally {
				setIsLoaded(true);
			}
		}
	}, []);

	// Save to localStorage whenever recentMovies changes
	useEffect(() => {
		if (isLoaded && typeof window !== "undefined") {
			try {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(recentMovies));
			} catch (error) {
				console.error("Error saving recently visited movies:", error);
			}
		}
	}, [recentMovies, isLoaded]);

	// Add a movie to recently visited
	const addRecentMovie = (movie: Omit<RecentlyVisitedMovie, "visitedAt">) => {
		setRecentMovies((prev) => {
			// Remove if already exists
			const filtered = prev.filter((m) => m.id !== movie.id);

			// Add to beginning with current timestamp
			const newMovie: RecentlyVisitedMovie = {
				...movie,
				visitedAt: new Date().toISOString(),
			};

			// Keep only the most recent MAX_RECENT_MOVIES
			return [newMovie, ...filtered].slice(0, MAX_RECENT_MOVIES);
		});
	};

	// Remove a specific movie
	const removeRecentMovie = (movieId: number) => {
		setRecentMovies((prev) => prev.filter((m) => m.id !== movieId));
	};

	// Clear all recently visited
	const clearRecentMovies = () => {
		setRecentMovies([]);
	};

	// Check if a movie is in recently visited
	const isRecentlyVisited = (movieId: number) => {
		return recentMovies.some((m) => m.id === movieId);
	};

	return {
		recentMovies,
		isLoaded,
		addRecentMovie,
		removeRecentMovie,
		clearRecentMovies,
		isRecentlyVisited,
	};
}
