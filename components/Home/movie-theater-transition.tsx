"use client";

import type React from "react";
import { useEffect, useState } from "react";

interface MovieTheaterTransitionProps {
	children: React.ReactNode;
	delay?: number;
}

export function MovieTheaterTransition({
	children,
	delay = 0,
}: MovieTheaterTransitionProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, delay);

		return () => clearTimeout(timer);
	}, [delay]);

	return (
		<div className='relative'>
			{/* Left Curtain Panel */}
			<div
				className={`fixed inset-0 w-1/2 bg-gradient-to-r from-red-900 via-red-800 to-red-700 transition-all duration-3000 ease-out z-50 ${
					isVisible ? "-translate-x-full" : "translate-x-0"
				}`}
				style={{
					transformOrigin: "right center",
					boxShadow: isVisible ? "10px 0 30px rgba(0,0,0,0.8)" : "none",
				}}>
				{/* Left Curtain Texture and Details */}
				<div className='absolute inset-0 bg-gradient-to-b from-red-700/50 to-red-900/50' />
				<div className='absolute inset-0 opacity-40'>
					{[...Array(15)].map((_, i) => (
						<div
							key={i}
							className='absolute top-0 bottom-0 w-px bg-red-950'
							style={{ left: `${i * 6.67}%` }}
						/>
					))}
				</div>

				{/* Curtain Rod Shadow */}
				<div className='absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/60 to-transparent' />

				{/* Curtain Fold Effect */}
				<div className='absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-red-950 to-transparent' />

				{/* Curtain Rings */}
				<div className='absolute top-2 left-0 right-0 flex justify-evenly'>
					{[...Array(8)].map((_, i) => (
						<div
							key={i}
							className='w-2 h-2 bg-yellow-600 rounded-full opacity-60'
							style={{
								animation: isVisible
									? `curtainRing 0.3s ease-out ${i * 0.1}s`
									: "none",
							}}
						/>
					))}
				</div>
			</div>
			{/* Right Curtain Panel */}
			<div
				className={`fixed inset-0 left-1/2 w-1/2 bg-gradient-to-l from-red-900 via-red-800 to-red-700 transition-all duration-3000 ease-out z-50 ${
					isVisible ? "translate-x-full" : "translate-x-0"
				}`}
				style={{
					transformOrigin: "left center",
					boxShadow: isVisible ? "-10px 0 30px rgba(0,0,0,0.8)" : "none",
				}}>
				{/* Right Curtain Texture and Details */}
				<div className='absolute inset-0 bg-gradient-to-b from-red-700/50 to-red-900/50' />
				<div className='absolute inset-0 opacity-40'>
					{[...Array(15)].map((_, i) => (
						<div
							key={i}
							className='absolute top-0 bottom-0 w-px bg-red-950'
							style={{ left: `${i * 6.67}%` }}
						/>
					))}
				</div>

				{/* Curtain Rod Shadow */}
				<div className='absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/60 to-transparent' />

				{/* Curtain Fold Effect */}
				<div className='absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-red-950 to-transparent' />

				{/* Curtain Rings */}
				<div className='absolute top-2 left-0 right-0 flex justify-evenly'>
					{[...Array(8)].map((_, i) => (
						<div
							key={i}
							className='w-2 h-2 bg-yellow-600 rounded-full opacity-60'
							style={{
								animation: isVisible
									? `curtainRing 0.3s ease-out ${i * 0.1}s`
									: "none",
							}}
						/>
					))}
				</div>
			</div>
			{/* Center Seam Shadow */}
			<div
				className={`fixed inset-y-0 left-1/2 w-1 bg-black/40 transform -translate-x-1/2 transition-opacity duration-1000 z-50 ${
					isVisible ? "opacity-0" : "opacity-100"
				}`}
			/>
			{/* Curtain Opening Sound Wave Effect */}
			{isVisible && (
				<div className='fixed inset-0 pointer-events-none z-40'>
					{[...Array(3)].map((_, i) => (
						<div
							key={i}
							className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full'
							style={{
								width: `${(i + 1) * 100}px`,
								height: `${(i + 1) * 100}px`,
								animation: `ripple 1.5s ease-out ${i * 0.2}s forwards`,
							}}
						/>
					))}
				</div>
			)}
			{/* Content with Enhanced Reveal Animation */}
			<div
				className={`transition-all duration-1500 ${
					isVisible
						? "opacity-100 scale-100 translate-y-0"
						: "opacity-0 scale-95 translate-y-4"
				}`}
				style={{ transitionDelay: isVisible ? "1.5s" : "0s" }}>
				{children}
			</div>
			<style jsx>{`
				@keyframes curtainRing {
					0% {
						transform: translateY(0) rotate(0deg);
					}
					50% {
						transform: translateY(-4px) rotate(10deg);
					}
					100% {
						transform: translateY(0) rotate(0deg);
					}
				}

				@keyframes ripple {
					0% {
						opacity: 0.6;
						transform: translate(-50%, -50%) scale(0);
					}
					30% {
						opacity: 0.4;
						transform: translate(-50%, -50%) scale(0.5);
					}
					70% {
						opacity: 0.2;
						transform: translate(-50%, -50%) scale(0.8);
					}
					100% {
						opacity: 0;
						transform: translate(-50%, -50%) scale(1);
					}
				}
			`}</style>
			{/* Vintage Cinema Lights */}

			{/* {showDots && (
				<>
					<UnderLineDots numberOfDots={3} className='sm:hidden' />
					<UnderLineDots
						numberOfDots={4}
						className='hidden sm:flex md:hidden'
					/>
					<UnderLineDots numberOfDots={5} className='hidden md:flex ' />
				</>
			)} */}
		</div>
	);
}
