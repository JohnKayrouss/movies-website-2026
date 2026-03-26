import React from "react";

export default function HomePageShimmer() {
	return (
		<section className='relative h-fit md:h-screen overflow-hidden'>
			{/* Background shimmer */}
			<div className='absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse' />

			<div className='relative z-10 flex pt-32 sm:pt-38 sm:items-center lg:h-screen lg:pt-0'>
				<div className='h-96 mx-auto px-4 md:px-6 lg:ml-24'>
					<div className='max-w-3xl space-y-8 pl-3'>
						{/* Title shimmer */}
						<div className='relative'>
							<div className='h-16 lg:h-24 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-lg animate-shimmer bg-[length:200%_100%] mb-4' />

							{/* Golden Underline shimmer */}
							<div className='h-1 bg-gradient-to-r from-yellow-400/30 via-yellow-400/60 to-yellow-400/30 rounded-full animate-pulse' />
						</div>

						{/* Synopsis shimmer */}
						<div className='space-y-3'>
							<div className='h-6 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded animate-shimmer bg-[length:200%_100%]' />
							<div className='h-6 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded animate-shimmer bg-[length:200%_100%] w-4/5' />
							<div className='h-6 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded animate-shimmer bg-[length:200%_100%] w-3/5' />
						</div>

						{/* Buttons shimmer */}
						<div className='flex flex-wrap gap-4 pt-6'>
							{/* First button shimmer */}
							<div className='h-14 w-48 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-lg animate-shimmer bg-[length:200%_100%]' />

							{/* Second button shimmer */}
							<div className='h-12 w-32 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-lg animate-shimmer bg-[length:200%_100%]' />
						</div>
					</div>
				</div>
			</div>

			{/* Bottom fade */}
			<div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent' />
		</section>
	);
}
