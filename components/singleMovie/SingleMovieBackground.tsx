import Image from "next/image";
import React from "react";

interface Props {
	movieBackdropPath: string;
	title: string;
}

export default function SingleMovieBackground({
	movieBackdropPath,
	title,
}: Props) {
	return (
		<div>
			{/* Animated Background */}
			<div className='absolute inset-0'>
				<div className='absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 animate-pulse' />
				<Image
					src={movieBackdropPath}
					alt={title}
					fill
					className={`object-cover sm:object-cover md:object-cover lg:object-cover transition-all duration-1000 opacity-30 sm:opacity-35 md:opacity-40 scale-100 sm:scale-105 md:scale-110`}
					priority
					sizes='100vw'
					quality={85}
				/>
				{/* Enhanced gradient overlays for better text readability */}
				<div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-black/40 sm:from-black/50 sm:via-black/60 sm:to-black/30' />
				<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 sm:from-black/70 sm:via-black/10 sm:to-black/50' />
				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30' />

				{/* Floating Particles Animation - Responsive */}
				<div className='absolute inset-0 overflow-hidden'>
					{[...Array(15)].map((_, i) => (
						<div
							key={i}
							className='absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white/10 rounded-full animate-float'
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
	);
}
