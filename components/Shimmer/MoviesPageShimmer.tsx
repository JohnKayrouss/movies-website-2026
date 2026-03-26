import React from "react";

export default function MoviesPageShimmer() {
	return (
		<div className='w-full py-8 px-4 sm:px-6 lg:px-8'>
			{/* Movies Grid Shimmer - One Row Only */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 py-4 place-items-center'>
				{/* Generate 4 shimmer cards for one row */}
				{[...Array(4)].map((_, index) => (
					<div
						key={index}
						className='group relative transform transition-all duration-500'
						style={{ animationDelay: `${index * 0.1}s` }}>
						{/* Glow effect shimmer */}
						<div className='absolute -inset-2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-xl opacity-20 blur-xl animate-shimmer bg-[length:200%_100%]' />

						{/* Movie card shimmer - matching MovieCard dimensions */}
						<div className='relative w-[300px] sm:w-[240px] md:w-[220px] lg:w-[260px] xl:w-[280px] 2xl:w-[340px] aspect-[2/3] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-xl overflow-hidden animate-shimmer bg-[length:200%_100%]'>
							{/* Poster shimmer - full card size */}
							<div className='absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 animate-shimmer bg-[length:200%_100%]' />

							{/* Gradient overlay shimmer */}
							<div className='absolute inset-0 bg-gradient-to-t from-gray-800/50 via-transparent to-transparent' />

							{/* Rating badge shimmer */}
							<div className='absolute top-3 right-3 w-12 h-6 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded-full animate-shimmer bg-[length:200%_100%]' />

							{/* Content overlay shimmer */}
							<div className='absolute inset-0 p-4 flex items-end'>
								<div className='w-full space-y-2'>
									{/* Title shimmer */}
									<div className='h-4 sm:h-5 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded animate-shimmer bg-[length:200%_100%]' />

									{/* Genres shimmer */}
									<div className='flex flex-wrap gap-1'>
										<div className='h-5 w-16 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded animate-shimmer bg-[length:200%_100%]' />
										<div className='h-5 w-20 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded animate-shimmer bg-[length:200%_100%]' />
									</div>

									{/* Release date shimmer */}
									<div className='h-5 w-20 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded animate-shimmer bg-[length:200%_100%]' />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Pagination Shimmer */}
			<div className='my-6 sm:my-8 md:my-10 flex justify-center items-center px-4'>
				<div className='relative p-4 sm:p-6 md:p-8 bg-gradient-to-r from-gray-700/50 via-gray-600/50 to-gray-700/50 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-600/30 shadow-xl md:shadow-2xl w-full max-w-fit animate-shimmer bg-[length:200%_100%]'>
					{/* Glowing background effect shimmer */}
					<div className='absolute inset-0 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 rounded-lg sm:rounded-xl md:rounded-2xl blur-sm md:blur-xl animate-shimmer bg-[length:200%_100%]' />

					{/* Floating particles shimmer */}
					<div className='hidden sm:block absolute -top-2 -left-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-400 rounded-full animate-pulse opacity-60' />
					<div className='hidden md:block absolute -top-1 -right-3 w-1 h-1 bg-gray-400 rounded-full animate-ping opacity-40' />
					<div className='hidden sm:block absolute -bottom-2 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gray-400 rounded-full animate-bounce opacity-50' />

					{/* Pagination content shimmer */}
					<div className='relative z-10 flex items-center gap-2 sm:gap-4'>
						{/* Previous button shimmer */}
						<div className='h-8 sm:h-10 w-16 sm:w-20 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded animate-shimmer bg-[length:200%_100%]' />

						{/* Page numbers shimmer */}
						<div className='flex gap-1 sm:gap-2'>
							{[...Array(5)].map((_, i) => (
								<div
									key={i}
									className={`h-8 sm:h-10 w-8 sm:w-10 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded animate-shimmer bg-[length:200%_100%] ${
										i === 2 ? "ring-2 ring-gray-400" : ""
									}`}
								/>
							))}
						</div>

						{/* Next button shimmer */}
						<div className='h-8 sm:h-10 w-16 sm:w-20 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded animate-shimmer bg-[length:200%_100%]' />
					</div>
				</div>
			</div>
		</div>
	);
}
