"use client";

export default function Loading_recentlyVisited() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black pt-32'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='animate-pulse'>
					<div className='h-8 bg-gray-700 rounded mb-2 w-64'></div>
					<div className='h-4 bg-gray-700 rounded mb-8 w-96'></div>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
						{Array.from({ length: 8 }).map((_, i) => (
							<div key={i} className='h-[400px] bg-gray-700 rounded-lg'></div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
