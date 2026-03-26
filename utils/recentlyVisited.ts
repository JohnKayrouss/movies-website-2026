"use client";

export interface MovieVisitData {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number;
	release_date: string;
}

// Utility function to track a movie visit (can be called from any component)
export function trackMovieVisit(movie: MovieVisitData) {
	if (typeof window === "undefined") return;

	try {
		const STORAGE_KEY = "recentlyVisitedMovies";
		const MAX_RECENT_MOVIES = 20;

		// Get existing data
		const existing = localStorage.getItem(STORAGE_KEY);
		let recentMovies = existing ? JSON.parse(existing) : [];

		// Remove if already exists
		recentMovies = recentMovies.filter((m: any) => m.id !== movie.id);

		// Add to beginning with current timestamp and calculate year
		const currentDate = new Date();
		const newMovie = {
			...movie,
			year: new Date(movie.release_date).getFullYear(),
			visitedAt: currentDate.toISOString(),
		};

		recentMovies.unshift(newMovie);

		// Keep only the most recent
		recentMovies = recentMovies.slice(0, MAX_RECENT_MOVIES);

		// Save back to localStorage
		localStorage.setItem(STORAGE_KEY, JSON.stringify(recentMovies));
	} catch (error) {
		console.error("Error tracking movie visit:", error);
	}
}

// Get recently visited movies (for SSR-safe usage)
export function getRecentlyVisitedMovies() {
	if (typeof window === "undefined") return [];

	try {
		const stored = localStorage.getItem("recentlyVisitedMovies");
		return stored ? JSON.parse(stored) : [];
	} catch (error) {
		console.error("Error getting recently visited movies:", error);
		return [];
	}
}
