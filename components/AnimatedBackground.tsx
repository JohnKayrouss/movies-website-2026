"use client";

import { useState, useEffect } from "react";
// import Image from "next/image";

const AnimatedBackground = () => {
	// const [isLiked, setIsLiked] = useState(false);
	// const [isWatchlisted, setIsWatchlisted] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<main className='text-white'>
			<div className='relative h-screen overflow-hidden'>
				{/* Animated Background */}
				<div className='fixed inset-0'>
					<div className='fixed inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/30 animate-pulse' />

					<div className='fixed inset-0 bg-gradient-to-l from-black via-black/10 to-transparent' />
					<div className='fixed inset-0 bg-gradient-to-t from-black via-transparent to-black/40' />

					{/* Floating Particles Animation */}
					<div className='fixed z-0 inset-0 overflow-hidden'>
						{[...Array(30)].map((_, i) => (
							<div
								key={i}
								className='fixed w-2 h-2 bg-white/10 rounded-full animate-float'
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
			</div>
		</main>
	);
};
export default AnimatedBackground;
