import { Movie } from "@/types/types";
import React from "react";
import { ScrollReveal } from "../Home/scroll-reveal";
import MovieCard from "../Home/MovieCard";
import PaginationContainer from "../reusable/PaginationContainer";

interface CollectionWrapperProps {
	movieList: Movie[];
	totalPages: number;
	currentPage: number;
	baseURL: string;
	ShowPagination?: boolean;
}
export default async function CollectionWrapper({
	movieList,
	totalPages,
	currentPage,
	baseURL,
	ShowPagination = true,
}: CollectionWrapperProps) {
	if (!movieList || movieList.length === 0) return;
	return (
		<>
			<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-4 scrollbar-hidden  place-items-center'>
				{movieList.map((movie, index) => (
					<ScrollReveal
						className='  '
						key={movie.id}
						direction='left'
						delay={index * 5}>
						<div className='relative group transform hover:scale-105 transition-all duration-500 '>
							<div className='absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500' />

							<MovieCard movie={movie} variant='fourItems' />
						</div>
					</ScrollReveal>
				))}
			</div>
			<div className='my-6 sm:my-8 md:my-10 flex justify-center items-center px-4'>
				{ShowPagination && (
					<>
						<div className='relative p-4 sm:p-6 md:p-8 bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-700/30 shadow-xl md:shadow-2xl w-full max-w-fit'>
							{/* Glowing background effect */}
							<div className='absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-lg sm:rounded-xl md:rounded-2xl blur-sm md:blur-xl'></div>

							{/* Floating particles - hidden on mobile, visible on larger screens */}
							<div className='hidden sm:block absolute -top-2 -left-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-orange-400 rounded-full animate-pulse opacity-60'></div>
							<div className='hidden md:block absolute -top-1 -right-3 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-40'></div>
							<div className='hidden sm:block absolute -bottom-2 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-yellow-400 rounded-full animate-bounce opacity-50'></div>

							{/* Subtle border glow */}

							<div className='absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm'></div>
							<div className='relative z-10'>
								<PaginationContainer
									totalPages={totalPages}
									currentPage={currentPage}
									baseURL={baseURL}
								/>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}
