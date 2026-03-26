"use client";

import { useEffect, useState } from "react";

export function FloatingElements() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>
			{/* Floating Circles */}
			{[...Array(15)].map((_, i) => (
				<div
					key={`circle-${i}`}
					className='absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 float-slow'
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						width: `${20 + Math.random() * 60}px`,
						height: `${20 + Math.random() * 60}px`,
						animationDelay: `${Math.random() * 10}s`,
						animationDuration: `${8 + Math.random() * 12}s`,
					}}
				/>
			))}

			{/* Floating Stars */}
			{[...Array(25)].map((_, i) => (
				<div
					key={`star-${i}`}
					className='absolute w-1 h-1 bg-white/20 twinkle'
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 5}s`,
					}}
				/>
			))}

			{/* Gradient Orbs */}
			<div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl pulse-slow' />
			<div
				className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-600/20 to-orange-600/20 rounded-full blur-3xl pulse-slow'
				style={{ animationDelay: "2s" }}
			/>
		</div>
	);
}
