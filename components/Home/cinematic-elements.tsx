"use client";

import { useEffect, useState } from "react";

export function CinematicElements() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			{/* Film Strip Animation */}

			{/* Projector Light Effect */}
			<div className='fixed top-16 left-1/2 transform -translate-x-1/2 w-2 h-screen bg-gradient-to-b from-yellow-200/20 via-yellow-100/10 to-transparent pointer-events-none z-projector projector-flicker' />

			{/* Film Grain Overlay */}
			<div className='fixed inset-0 pointer-events-none z-30 opacity-20'>
				<div className='w-full h-full bg-film-grain grain' />
			</div>

			{/* Spotlight Effects */}
			<div className='fixed inset-0 pointer-events-none z-20'>
				<div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-yellow-200/10 via-yellow-100/5 to-transparent rounded-full spotlight-1' />
				<div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-200/10 via-blue-100/5 to-transparent rounded-full spotlight-2' />
			</div>

			{/* Movie Reel Animation */}
			<div className='fixed bottom-8 right-8 w-16 h-16 pointer-events-none z-film-strip'>
				<div className='relative w-full h-full'>
					<div className='absolute inset-0 border-4 border-gray-600 rounded-full spin-slow'>
						<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-700 rounded-full' />
						{[...Array(8)].map((_, i) => (
							<div
								key={i}
								className='absolute w-1 h-6 bg-gray-600 rounded'
								style={{
									top: "50%",
									left: "50%",
									transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
									transformOrigin: "50% 0",
								}}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Vintage Cinema Border */}
			<div className='fixed inset-0 pointer-events-none z-cinema-overlay'>
				<div className='absolute inset-0 border-8 border-yellow-600/30 rounded-lg shadow-cinema' />
			</div>
		</>
	);
}
