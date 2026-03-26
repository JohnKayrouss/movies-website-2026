import React from "react";

export default function UserProfileShimmer() {
	return (
		<section className='relative pt-36 pb-12 overflow-hidden'>
			{/* Background gradient shimmer */}
			<div className='absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-700/30' />

			<div className='container mx-auto px-4 md:px-6 relative z-10'>
				<div className='text-center mb-12'>
					{/* Avatar shimmer */}
					<div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-full mb-6 animate-shimmer bg-[length:200%_100%]' />

					{/* Name shimmer */}
					<div className='h-10 md:h-12 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-lg animate-shimmer bg-[length:200%_100%] mb-4 max-w-xs mx-auto' />

					{/* Subtitle shimmer */}
					<div className='h-6 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded animate-shimmer bg-[length:200%_100%] max-w-md mx-auto' />
				</div>
			</div>
		</section>
	);
}
