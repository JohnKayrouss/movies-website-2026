"use client";

import { useRecentlyVisited } from "@/hooks/useRecentlyVisited";
import { Movie } from "@/types/types";
import Loading_recentlyVisited from "@/components/loadingEffect/Loading_recentlyVisited";
import RecentlyVisited_EmptyList from "@/components/RecentlyVisited/RecentlyVisited_EmptyList";
import RcentlyVisited_Header from "@/components/RecentlyVisited/RcentlyVisited_Header";
import RecentlyVisitedList from "@/components/RecentlyVisited/RecentlyVisitedList";
import { Suspense } from "react";
import MoviesPageWithHeaderShimmer from "@/components/Shimmer/MoviesPageWithHeaderShimmer";

export default function RecentlyVisitedPage() {
	return (
		<Suspense fallback={<MoviesPageWithHeaderShimmer />}>
			<RecentlyVisitedPageContent />
		</Suspense>
	);
}
const RecentlyVisitedPageContent = () => {
	const { recentMovies, isLoaded, clearRecentMovies, removeRecentMovie } =
		useRecentlyVisited();

	if (!isLoaded) return <Loading_recentlyVisited />;

	if (recentMovies.length === 0) return <RecentlyVisited_EmptyList />;

	const moviesForDisplay: Movie[] = recentMovies.map((movie) => ({
		id: movie.id,
		title: movie.title,
		poster_path: movie.poster_path,
		overview: "",
		release_date: movie.release_date,
		vote_average: movie.vote_average || 0,
		vote_count: 0,
		adult: false,
		backdrop_path: "",
		genre_ids: [],
		original_language: "",
		original_title: movie.title,
		popularity: 0,
		video: false,
	}));

	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black pt-32'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<RcentlyVisited_Header
					clearRecentMovies={clearRecentMovies}
					recentMoviesLength={recentMovies.length}
				/>

				<RecentlyVisitedList
					moviesForDisplay={moviesForDisplay}
					removeRecentMovie={removeRecentMovie}
				/>
			</div>
		</div>
	);
};
