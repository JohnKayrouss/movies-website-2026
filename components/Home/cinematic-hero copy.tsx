"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Plus, Info, Star, Clock, Volume2 } from "lucide-react";

export function CinematicHero() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [showTitle, setShowTitle] = useState(false);

	useEffect(() => {
		const timer1 = setTimeout(() => setIsLoaded(true), 100);
		const timer2 = setTimeout(() => setShowTitle(true), 100);
		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, []);

	const featuredMovie = {
		title: "Dune: Part Two",
		year: "2024",
		rating: "8.9",
		duration: "166 min",
		genre: ["Sci-Fi", "Adventure", "Drama"],
		synopsis:
			"Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
		backdrop: "/placeholder.svg?height=800&width=1400",
	};

	return (
		<section className='relative h-screen overflow-hidden'>
			{/* Cinematic Background with Multiple Layers */}
			<div className='absolute inset-0'>
				{/* Main Background */}
				<Image
					src={featuredMovie.backdrop || "/placeholder.svg"}
					alt={featuredMovie.title}
					fill
					className={`object-cover transition-all duration-3000 ${
						isLoaded ? "opacity-60 scale-100" : "opacity-0 scale-110"
					}`}
					priority
				/>

				{/* Cinematic Vignette */}
				<div className='absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/80' />

				{/* Film Noir Lighting */}
				<div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/70' />
				<div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50' />

				{/* Dynamic Light Rays */}
				<div className='absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-200/30 to-transparent light-ray-1' />
				<div className='absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-blue-200/20 to-transparent light-ray-2' />

				{/* Cinematic Dust Particles */}
				<div className='absolute inset-0 overflow-hidden'>
					{[...Array(30)].map((_, i) => (
						<div
							key={i}
							className='absolute w-1 h-1 bg-white/30 rounded-full dust-float'
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								animationDelay: `${Math.random() * 10}s`,
								animationDuration: `${5 + Math.random() * 10}s`,
							}}
						/>
					))}
				</div>
			</div>

			{/* Cinematic Content */}
			<div className='relative z-10 h-full flex items-center pt-16'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='max-w-3xl space-y-8'>
						{/* Genre Tags with Cinematic Entrance */}
						<div className='flex flex-wrap gap-3'>
							{featuredMovie.genre.map((g, index) => (
								<Badge
									key={g}
									className={`bg-yellow-600/80 text-black hover:bg-yellow-500 transition-all duration-1000 transform ${
										isLoaded
											? "translate-y-0 opacity-100 scale-100"
											: "translate-y-10 opacity-0 scale-75"
									}`}
									style={{ transitionDelay: `${0.5 + index * 0.2}s` }}>
									{g}
								</Badge>
							))}
						</div>

						{/* Cinematic Title with Typewriter Effect */}
						<div className='relative'>
							<h1 className='text-6xl md:text-8xl font-bold text-white leading-tight font-serif'>
								{showTitle && (
									<span className='inline-block typewriter'>
										{featuredMovie.title.split("").map((char, index) => (
											<span
												key={index}
												className='inline-block fade-in-char'
												style={{ animationDelay: `${index * 0.1}s` }}>
												{char === " " ? "\u00A0" : char}
											</span>
										))}
									</span>
								)}
							</h1>

							{/* Golden Underline Animation */}
							<div
								className={`h-1 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-2000 ${
									showTitle ? "w-full" : "w-0"
								}`}
								style={{ transitionDelay: "2s" }}
							/>
						</div>

						{/* Movie Stats with Cinematic Icons */}
						<div
							className={`flex items-center gap-8 text-xl text-gray-300 transition-all duration-1000 ${
								isLoaded
									? "translate-x-0 opacity-100"
									: "-translate-x-10 opacity-0"
							}`}
							style={{ transitionDelay: "1.8s" }}>
							<div className='flex items-center gap-2 hover:text-yellow-400 transition-colors group'>
								<Star className='w-6 h-6 fill-yellow-400 text-yellow-400 group-hover:animate-pulse' />
								<span className='font-bold'>{featuredMovie.rating}</span>
							</div>
							<div className='flex items-center gap-2 hover:text-white transition-colors'>
								<Clock className='w-5 h-5' />
								<span>{featuredMovie.duration}</span>
							</div>
							<div className='flex items-center gap-2 hover:text-white transition-colors'>
								<span className='text-2xl'>🎬</span>
								<span>{featuredMovie.year}</span>
							</div>
						</div>

						{/* Synopsis with Fade-in */}
						<p
							className={`text-xl text-gray-300 leading-relaxed max-w-2xl transition-all duration-1500 ${
								isLoaded
									? "translate-y-0 opacity-100"
									: "translate-y-5 opacity-0"
							}`}
							style={{ transitionDelay: "2.2s" }}>
							{featuredMovie.synopsis}
						</p>

						{/* Cinematic Action Buttons */}
						<div
							className={`flex flex-wrap gap-6 pt-6 transition-all duration-1000 ${
								isLoaded
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
							style={{ transitionDelay: "2.5s" }}>
							<Button
								size='lg'
								className='bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-xl font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-600/50 group relative overflow-hidden'>
								<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
								<Play className='mr-3 h-6 w-6 group-hover:animate-pulse' />
								Watch Now
							</Button>

							<Button
								size='lg'
								variant='outline'
								className='border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 px-8 py-4 text-xl transition-all duration-500 hover:scale-110 hover:border-yellow-400 bg-transparent backdrop-blur-sm group'>
								<Plus className='mr-3 h-5 w-5 group-hover:rotate-90 transition-transform duration-300' />
								My List
							</Button>

							<Button
								size='lg'
								variant='ghost'
								className='text-white hover:bg-white/10 px-8 py-4 text-xl transition-all duration-500 hover:scale-110 group'>
								<Info className='mr-3 h-5 w-5 group-hover:animate-bounce' />
								More Info
							</Button>

							<Button
								size='lg'
								variant='ghost'
								className='text-white hover:bg-white/10 p-4 transition-all duration-500 hover:scale-125 group'>
								<Volume2 className='h-6 w-6 group-hover:animate-pulse' />
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Cinematic Bottom Fade */}
			<div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent' />
		</section>
	);
}
