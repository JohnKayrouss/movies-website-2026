"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function GenresContainerContent() {
	// Test delay - this will trigger Suspense fallback

	const router = useRouter();

	const genres = [
		{
			id: 28,
			name: "Action",
		},
		{
			id: 12,
			name: "Adventure",
		},
		{
			id: 16,
			name: "Animation",
		},
		{
			id: 35,
			name: "Comedy",
		},
		{
			id: 80,
			name: "Crime",
		},
		{
			id: 99,
			name: "Documentary",
		},
		{
			id: 18,
			name: "Drama",
		},
		{
			id: 10751,
			name: "Family",
		},
		{
			id: 14,
			name: "Fantasy",
		},
		{
			id: 36,
			name: "History",
		},
		{
			id: 27,
			name: "Horror",
		},
		{
			id: 10402,
			name: "Music",
		},
		{
			id: 9648,
			name: "Mystery",
		},
		{
			id: 10749,
			name: "Romance",
		},
		{
			id: 878,
			name: "Science Fiction",
		},
		{
			id: 10770,
			name: "TV Movie",
		},
		{
			id: 53,
			name: "Thriller",
		},
		{
			id: 10752,
			name: "War",
		},
		{
			id: 37,
			name: "Western",
		},
	];

	const handleGenreClick = (genreId: number) => {
		router.push(`/movies/genres/${genreId}`);
	};

	return (
		<div className='w-full py-12 px-4 sm:px-6 lg:px-8'>
			{/* Header */}
			<div className='text-center mb-8'>
				<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent mb-4'>
					Browse by Genre
				</h2>
				<p className='text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto'>
					Discover movies by your favorite genres
				</p>
			</div>

			{/* Genres Grid */}
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 max-w-7xl mx-auto'>
				{genres.map((genre, index) => (
					<div
						key={genre.id}
						className='group relative'
						style={{ animationDelay: `${index * 0.05}s` }}>
						{/* Badge */}
						<button
							onClick={() => handleGenreClick(genre.id)}
							className='relative w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-primary hover:to-yellow-400 text-white font-semibold py-3 px-4 sm:py-4 sm:px-5 rounded-xl transition-all duration-700 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95 text-xs sm:text-sm md:text-base overflow-hidden group'>
							{/* Color Transition Overlay */}
							<div className='absolute inset-0 bg-gradient-to-r from-primary to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

							{/* Shimmer Effect */}
							<div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent' />

							{/* Content */}
							<span className='relative z-10 block truncate transition-colors duration-700 group-hover:text-white'>
								{genre.name}
							</span>

							{/* Hover Icon */}
							<div className='absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2'>
								<svg
									className='w-4 h-4'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</div>
						</button>
					</div>
				))}
			</div>

			{/* Floating Particles Background */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				{[...Array(12)].map((_, i) => (
					<div
						key={i}
						className='absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary/30 rounded-full animate-float'
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 5}s`,
							animationDuration: `${3 + Math.random() * 4}s`,
						}}
					/>
				))}
			</div>
		</div>
	);
}
