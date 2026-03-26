import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
	recentMoviesLength: number;
	clearRecentMovies: () => void;
}
export default function RcentlyVisited_Header({
	recentMoviesLength,
	clearRecentMovies,
}: Props) {
	return (
		<>
			<div className='flex items-center justify-between mb-8'>
				<div className='flex items-center gap-4'>
					<Link
						href='/'
						className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'>
						<ArrowLeft className='w-5 h-5' />
						Back to Home
					</Link>
				</div>
				<button
					onClick={clearRecentMovies}
					className='flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors'>
					<X className='w-4 h-4' />
					Clear All
				</button>
			</div>

			{/* Page Title */}
			<div className='mb-8'>
				<h1 className='text-3xl sm:text-4xl font-bold text-white mb-2'>
					Recently Visited Movies
				</h1>
				<p className='text-gray-400'>
					{recentMoviesLength} movie{recentMoviesLength !== 1 ? "s" : ""} in
					your viewing history
				</p>
			</div>
		</>
	);
}
