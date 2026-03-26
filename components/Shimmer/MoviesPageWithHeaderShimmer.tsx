import React from "react";

export default function MoviesPageWithHeaderShimmer() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden'>
			{/* Background elements shimmer */}
			<div className='absolute inset-0'>
				{/* Film grain texture */}
				<div className="absolute inset-0 bg-[url('/images/film-grain.png')] opacity-10 mix-blend-overlay" />

				{/* Floating cinema elements shimmer */}
				<div className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-gray-600/20 via-gray-500/20 to-gray-600/20 rounded-full blur-xl animate-pulse'></div>
				<div className='absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-gray-600/20 via-gray-500/20 to-gray-600/20 rounded-full blur-xl animate-bounce delay-300'></div>
				<div className='absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-gray-600/20 via-gray-500/20 to-gray-600/20 rounded-full blur-xl animate-ping delay-700'></div>
				<div className='absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-r from-gray-600/20 via-gray-500/20 to-gray-600/20 rounded-full blur-xl animate-pulse delay-1000'></div>

				{/* Floating particles shimmer */}
				<div className='absolute top-1/4 left-1/2 w-2 h-2 bg-gray-500/30 rounded-full animate-bounce delay-200'></div>
				<div className='absolute top-3/4 left-1/4 w-1 h-1 bg-gray-500/50 rounded-full animate-ping delay-500'></div>
				<div className='absolute top-1/2 right-1/4 w-3 h-3 bg-gray-500/30 rounded-full animate-pulse delay-150'></div>

				{/* Additional floating elements shimmer */}
				<div className='absolute top-16 right-1/2 w-6 h-6 bg-gradient-to-r from-gray-500/30 to-gray-600/30 rounded-full blur-lg animate-bounce delay-1200'></div>
				<div className='absolute bottom-40 left-1/2 w-4 h-4 bg-gradient-to-r from-gray-500/30 to-gray-600/30 rounded-full blur-md animate-ping delay-800'></div>

				{/* Moving gradient overlay */}
				<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent'></div>
			</div>

			<div className='relative z-10 pt-32 pb-20'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='relative'>
						{/* Breadcrumb Shimmer */}
						<div className='mb-6'>
							<div className='flex items-center gap-2'>
								<div className='h-4 w-12 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded animate-shimmer bg-[length:200%_100%]' />
								<div className='h-4 w-1 bg-gray-500 rounded' />
								<div className='h-4 w-24 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded animate-shimmer bg-[length:200%_100%]' />
							</div>
						</div>

						{/* Collection Header Shimmer */}
						<div className='relative my-8 py-6'>
							<div className='relative z-10'>
								{/* Main Header Shimmer */}
								<div className='h-8 sm:h-10 md:h-12 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-lg animate-shimmer bg-[length:200%_100%] mb-2 max-w-md' />

								{/* Animated underline shimmer */}
								<div className='h-0.5 bg-gradient-to-r from-gray-500 to-gray-400 mb-4 w-full animate-shimmer bg-[length:200%_100%]'></div>

								{/* Sub Header Shimmer */}
								<div className='h-4 sm:h-5 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded animate-shimmer bg-[length:200%_100%] max-w-2xl' />

								{/* Subtle accent dots shimmer */}
								<div className='absolute -top-1 -left-1 w-1 h-1 bg-gray-500 rounded-full opacity-60'></div>
								<div className='absolute top-6 -right-1 w-0.5 h-0.5 bg-gray-500 rounded-full opacity-40'></div>
							</div>
						</div>

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
					</div>
				</div>
			</div>
		</div>
	);
}
