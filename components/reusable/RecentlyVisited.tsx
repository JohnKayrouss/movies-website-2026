"use client";

import { useRecentlyVisited } from "@/hooks/useRecentlyVisited";
import MovieCard from "@/components/Home/MovieCard";
import { Movie } from "@/types/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRating } from "@/utils/HelperFunctions";

interface RecentlyVisitedProps {
	maxItems?: number;
	showTitle?: boolean;
	variant?: "fourItems" | "default";
}

export default function RecentlyVisited({
	maxItems = 10,
	showTitle = true,
	variant = "fourItems",
}: RecentlyVisitedProps) {
	const { recentMovies, isLoaded, clearRecentMovies } = useRecentlyVisited();

	// Don't render anything during SSR or while loading
	if (!isLoaded) {
		return (
			<div className='animate-pulse'>
				<div className='h-6 bg-gray-700 rounded mb-4 w-48'></div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
					{Array.from({ length: 4 }).map((_, i) => (
						<div key={i} className='h-[400px] bg-gray-700 rounded-lg'></div>
					))}
				</div>
			</div>
		);
	}

	// Don't show if no recent movies
	if (recentMovies.length === 0) {
		return null;
	}

	const displayMovies = recentMovies.slice(0, maxItems);

	// Convert to Movie format for MovieCard component
	const moviesForDisplay: Movie[] = displayMovies.map((movie) => ({
		id: movie.id,
		title: movie.title,
		poster_path: movie.poster_path,
		rating: getRating(movie.vote_average || 0),
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
		<section className='mb-8'>
			{showTitle && (
				<div className='flex items-center justify-between mb-6'>
					<div>
						<h2 className='text-2xl sm:text-3xl font-bold text-white mb-2'>
							Recently Visited
						</h2>
						<p className='text-gray-400 text-sm'>
							Movies you&apos;ve recently viewed
						</p>
					</div>
					<div className='flex items-center gap-3'>
						<Link
							href='/recently-visited'
							className='flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors'>
							View All
							<ArrowRight className='w-4 h-4' />
						</Link>
						<button
							onClick={clearRecentMovies}
							className='text-gray-400 hover:text-white text-sm border border-gray-600 hover:border-gray-400 px-3 py-1 rounded transition-colors'>
							Clear All
						</button>
					</div>
				</div>
			)}

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
				{moviesForDisplay.map((movie, index) => (
					<div
						key={movie.id}
						className='relative group transform hover:scale-105 transition-all duration-300'>
						{/* Recently visited badge */}
						<div className='absolute top-2 left-2 z-10 bg-orange-500/90 text-white text-xs px-2 py-1 rounded-full'>
							#{index + 1}
						</div>

						{/* Release year badge */}
						<div className='absolute bottom-2 left-2 z-10 bg-black/70 text-white text-xs px-2 py-1 rounded-full'>
							{displayMovies[index].year}
						</div>

						<MovieCard movie={movie} variant={variant} />
					</div>
				))}
			</div>
		</section>
	);
}
