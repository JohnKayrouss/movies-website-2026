import React from "react";

export default function GenresPageShimmer() {
	return (
		<div className='w-full py-12 px-4 sm:px-6 lg:px-8 relative'>
			{/* Header Shimmer */}
			<div className='text-center mb-8'>
				{/* Title shimmer */}
				<div className='h-8 sm:h-10 md:h-12 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-lg animate-shimmer bg-[length:200%_100%] mb-4 max-w-md mx-auto' />

				{/* Subtitle shimmer */}
				<div className='h-4 sm:h-5 md:h-6 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded animate-shimmer bg-[length:200%_100%] max-w-lg mx-auto' />
			</div>

			{/* Genres Grid Shimmer */}
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 max-w-7xl mx-auto'>
				{/* Generate 18 shimmer badges to match the number of genres */}
				{[...Array(18)].map((_, index) => (
					<div
						key={index}
						className='group relative'
						style={{ animationDelay: `${index * 0.05}s` }}>
						{/* Genre Badge Shimmer */}
						<div className='relative w-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-xl animate-shimmer bg-[length:200%_100%] overflow-hidden'>
							{/* Badge content shimmer */}
							<div className='py-3 px-4 sm:py-4 sm:px-5'>
								{/* Text shimmer with varying widths */}
								<div
									className={`h-4 sm:h-5 md:h-6 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded animate-shimmer bg-[length:200%_100%] ${
										index % 3 === 0
											? "w-3/4"
											: index % 3 === 1
											? "w-full"
											: "w-5/6"
									}`}
								/>
							</div>

							{/* Hover icon shimmer */}
							<div className='absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded animate-shimmer bg-[length:200%_100%]' />
						</div>
					</div>
				))}
			</div>

			{/* Floating Particles Background Shimmer */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				{[...Array(12)].map((_, i) => (
					<div
						key={i}
						className='absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-500/30 rounded-full animate-pulse'
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
