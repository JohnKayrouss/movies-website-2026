"use server";

import { Movie, MovieVideo, TMovieDetails_basicInfo } from "@/types/types";

const apiKey = process.env.TMDB_API_KEY;
if (!apiKey) {
	throw new Error("TMDB_API_KEY environment variable is not set");
}

const baseURL = `https://api.themoviedb.org/3/movie`;

export const getMoviesData = async ({
	baseURL,
	category,
	apiKey,
	pageNumber = 1,
}: {
	baseURL: string;
	category: string;
	apiKey: string;
	pageNumber?: number;
}): Promise<{
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}> => {
	// TMDB API has a maximum of 500 pages limit, so clamp the page number
	const clampedPageNumber = Math.min(pageNumber, 500);

	const res = await fetch(
		`${baseURL}/${category}?language=en-US&page=${clampedPageNumber}&api_key=${apiKey}`,
		{
			next: { revalidate: 60 },
		},
	);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	const data = await res.json();

	// Cap the total_pages to 500 since that's TMDB's actual limit
	if (data.total_pages > 500) {
		data.total_pages = 500;
	}

	return data;
};

export const now_playing = async (pageNumber: number = 1) =>
	getMoviesData({ baseURL, category: "now_playing", apiKey, pageNumber });
export const upcoming_movies = async (pageNumber: number = 1) =>
	getMoviesData({ baseURL, category: "upcoming", apiKey, pageNumber });

export const popular_movies = async (pageNumber: number = 1) =>
	getMoviesData({ baseURL, category: "popular", apiKey, pageNumber });

export const topRated_movies = async (pageNumber: number = 1) =>
	getMoviesData({ baseURL, category: "top_rated", apiKey, pageNumber });

export const getSingleMovie_basicInfo = async ({
	movieId,
}: {
	movieId: string;
}): Promise<TMovieDetails_basicInfo[]> => {
	const res = await fetch(
		`${baseURL}/${movieId}?api_key=${apiKey}&language=en-US&append_to_response=credits`,
		{
			next: {
				revalidate: 60,
				tags: [`movie-${movieId}-details`], // Add tag for movie details
			},
		},
	);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	const data = await res.json();
	return data;
};

export const getMovieVideos = async ({
	movieId,
}: {
	movieId: string;
}): Promise<MovieVideo[]> => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
	);
	if (!response.ok) {
		throw new Error("Failed to fetch movie videos");
	}
	const data = await response.json();
	return data.results;
};

export const getFirstMovieVideo = async ({
	movieId,
}: {
	movieId: string;
}): Promise<MovieVideo[]> => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
	);
	if (!response.ok) {
		throw new Error("Failed to fetch movie videos");
	}
	const data = await response.json();
	return data.results[0];
};
export const getMovieRecommendations = async ({
	movieId,
}: {
	movieId: string;
}): Promise<Movie[]> => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}`,
	);
	if (!response.ok) {
		throw new Error("Failed to fetch movie recommendations");
	}
	const data = await response.json();
	return data.results;
};

// https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=GENRE_ID

export const getMoviesByGenre = async ({
	genreId,
	pageNumber,
}: {
	genreId: string;
	pageNumber: number;
}) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${pageNumber}`,
	);

	const data = await response.json();
	return data;
};
