"use client";

import { useState, useEffect } from "react";
import { SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

import { Button, buttonVariants } from "@/components/ui/button";

import BackgroundBackDrop from "./BackgroundBackDrop/BackgroundBackDrop";
import { randomBackdrop } from "@/utils/HelperFunctions";
import { Movie } from "@/types/types";
import Link from "next/link";

export function CinematicHero({ nowPlaying }: { nowPlaying: Movie[] }) {
	const { user } = useUser();

	const [isLoaded, setIsLoaded] = useState(false);
	const [showTitle, setShowTitle] = useState(false);
	const [backdrop, setBackdrop] = useState<string | null>(null);

	useEffect(() => {
		setBackdrop(randomBackdrop(nowPlaying));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		setIsLoaded(true);
		setShowTitle(true);
	}, []);

	const slogan = {
		title: "Theatrist",
		synopsis:
			"Your Ultimate Guide to Movies — Explore Trailers, Ratings, Cast, and More.",
		backdrop: backdrop,
	};

	return (
		<section className='relative h-fit md:h-screen overflow-hidden'>
			<BackgroundBackDrop src={slogan.backdrop ?? ""} isLoaded={isLoaded} />

			<div className='relative z-10 flex pt-32 sm:pt-38 sm:items-center lg:h-screen lg:pt-0'>
				<div className='h-96 mx-auto px-4 md:px-6 lg:ml-24'>
					<div className='max-w-3xl space-y-8 pl-3 '>
						<div className='relative '>
							<h1 className='text-3xl  lg:text-6xl font-bold text-white leading-tight '>
								{showTitle && (
									<span className='inline-block typewriter'>
										{slogan.title.split("").map((char, index) => (
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

						{/* Synopsis with Fade-in */}
						<p
							className={`text-base sm:text-2xl text-gray-300 leading-relaxed max-w-2xl transition-all duration-1500 ${
								isLoaded
									? "translate-y-0 opacity-100"
									: "translate-y-5 opacity-0"
							}`}
							style={{ transitionDelay: "2.2s" }}>
							{slogan.synopsis}
						</p>

						{/* Cinematic Action Buttons */}
						<div
							className={`flex flex-wrap gap-4 pt-6 transition-all duration-1000  ${
								isLoaded
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
							style={{ transitionDelay: "2.5s" }}>
							<Link
								href='/movies/genres'
								className={buttonVariants({
									variant: "outline",
									size: "lg",
									className:
										"bg-gradient-to-r from-primary to-primary/60 hover:from-primary/65 hover:to-primary text-white px-4 py-5 text-xl font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-600/50 group relative overflow-hidden cursor-pointer ",
								})}>
								<>See all Genres</>
							</Link>

							{user ? (
								<Link
									href={`/user-profile/${user?.id}/favorites`}
									className={buttonVariants({
										variant: "outline",
										size: "lg",
										className:
											"border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 px-4 py-4 text-lg transition-all duration-500 hover:scale-110 hover:border-yellow-400 bg-transparent backdrop-blur-sm group cursor-pointer ",
									})}>
									My List
								</Link>
							) : (
								<SignInButton mode='modal'>
									<Button
										size='lg'
										variant='outline'
										className='border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 px-8 py-4 text-xl transition-all duration-500 hover:scale-110 hover:border-yellow-400 bg-transparent backdrop-blur-sm group cursor-pointer'>
										My List
									</Button>
								</SignInButton>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Cinematic Bottom Fade */}
			<div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent' />
		</section>
	);
}
