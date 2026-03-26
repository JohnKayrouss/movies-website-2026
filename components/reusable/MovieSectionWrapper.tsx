import { Movie } from "@/types/types";
import React from "react";
import { ScrollReveal } from "../Home/scroll-reveal";
import MovieCard from "../Home/MovieCard";

interface MovieSectionWrapperProps {
	movieList: Movie[];
}
export default function MovieSectionWrapper({
	movieList,
}: MovieSectionWrapperProps) {
	if (!movieList || movieList.length === 0) return;
	return (
		<div className=' flex flex-nowrap overflow-x-auto gap-6 py-4 scrollbar-hidden'>
			{movieList.map((movie, index) => (
				<ScrollReveal
					className='  '
					key={movie.id}
					direction='left'
					delay={index * 5}>
					<div className='relative group transform hover:scale-105 transition-all duration-500 '>
						<div className='absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500' />

						<MovieCard movie={movie} />
					</div>
				</ScrollReveal>
			))}
		</div>
	);
}
