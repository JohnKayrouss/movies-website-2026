"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Movie } from "@/types/types";
import {
	getMoviePosterPath,
	getMovieReleaseDate_year_month,
} from "@/utils/HelperFunctions";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface FilmStripCarouselProps {
	movies: Movie[];
	title: string;
}

export default function StripNumber({ number }: { number: number }) {
	return (
		<div>
			<div className='absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-80' />
			<div className='absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800'>
				{/* Film Perforations */}
				<div className='absolute top-0 left-0 right-0 h-4 flex'>
					{[...Array(number)].map((_, i) => (
						<div key={i} className='flex-1 border-r border-gray-600'>
							<div className='w-full h-2 bg-black rounded-b-sm' />
						</div>
					))}
				</div>
				<div className='absolute bottom-0 left-0 right-0 h-4 flex'>
					{[...Array(number)].map((_, i) => (
						<div key={i} className='flex-1 border-r border-gray-600'>
							<div className='w-full h-2 bg-black rounded-t-sm' />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export function FilmStripCarousel({ movies, title }: FilmStripCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);

	const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;

	const scrollSpeed =
		screenWidth < 640
			? 1000
			: screenWidth < 768
			? 1300
			: screenWidth < 1024
			? 1500
			: 2300;

	useEffect(() => {
		if (!isPlaying) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % movies.length);
		}, scrollSpeed);

		return () => clearInterval(interval);
	}, [movies.length, isPlaying, scrollSpeed]);

	return (
		<div className='relative overflow-hidden bg-black py-4 lg:py-8'>
			{/* Film Strip Header */}
			<div className='flex items-center justify-center mb-8'>
				<div className='relative'>
					<h2 className='text-3xl md:text-4xl font-bold text-white'>{title}</h2>
					<div className='absolute -top-2 -left-4 w-7 h-7 border-4 border-yellow-400/50 rounded-full projector-light' />
					<div
						className='absolute -top-2 -right-4 w-7 h-7 border-4 border-yellow-400/50 rounded-full projector-light'
						style={{ animationDelay: "0.5s" }}
					/>
				</div>
			</div>

			{/* Film Strip Container */}
			<div className='relative'>
				{/* Film Strip Background */}
				<StripNumber
					number={
						screenWidth < 640
							? 25
							: screenWidth < 768
							? 30
							: screenWidth < 1024
							? 40
							: 50
					}
				/>

				{/* Movie Frames */}
				<div className='relative px-8 py-5  '>
					<>
						<div
							className='flex transition-transform duration-1000 ease-in-out'
							style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
							{movies.map((movie, index) => {
								const imagePath =
									getMoviePosterPath(movie.poster_path) || "/placeholder.svg";
								const releaseDate = getMovieReleaseDate_year_month(movie);
								return (
									<div
										className='flex-none  md:w-1/2  lg:w-1/3  xl:w-1/4 px-2 mx-4 '
										key={movie.id}>
										<Link href={`/movies/${movie.id}`} key={movie.id}>
											<div className='relative group'>
												{/* Film Frame */}
												<div className='absolute -inset-2 bg-gradient-to-b from-cyan-600 via-blue-800 to-teal-900 rounded-lg' />
												<div className='relative bg-black rounded-lg overflow-hidden'>
													<div className='relative w-full h-96'>
														<Image
															src={imagePath}
															alt={movie.title}
															width={300}
															height={300}
															className='w-full h-auto transition-all duration-500 group-hover:scale-110 object-cover'
														/>

														<div
															className='absolute inset-0 pointer-events-none'
															style={{
																background:
																	"linear-gradient(to bottom, rgba(0,0,0,0.0) 60%, rgba(0,0,0) 100%)",
															}}
														/>
													</div>
													{/* Film Frame Overlay */}
													<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />

													{/* Movie Info */}
													<div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
														<h3 className='font-bold text-sm lg:text-base mb-1 line-clamp-1'>
															{movie.title}
														</h3>

														<Badge
															variant='secondary'
															className={`bg-black text-primary font-semibold text-xs lg:text-sm`}>
															{releaseDate}
														</Badge>
													</div>

													{/* Projector Light Effect */}
													{index === currentIndex && (
														<div className='absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-transparent projector-sweep' />
													)}
												</div>
											</div>
										</Link>
									</div>
								);
							})}
						</div>
					</>
				</div>

				{/* Film Strip Controls */}
				<div className='flex justify-center items-center gap-4 -mt-8'>
					<button
						onClick={() => setIsPlaying(!isPlaying)}
						className='px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300 hover:scale-105 font-bold'>
						{isPlaying ? "⏸️ PAUSE" : "▶️ PLAY"}
					</button>
				</div>
			</div>
		</div>
	);
}
