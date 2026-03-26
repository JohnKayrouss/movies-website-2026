import React from "react";
import { CinematicHero } from "./cinematic-hero";
import { FloatingElements } from "./floating-elements";
import { CinematicElements } from "./cinematic-elements";
import { Movie } from "@/types/types";
import NowPlayingSection from "./NowPlayingSection";
import SeeMoreBtn from "../reusable/SeeMoreBtn";

export default function Hero({ nowPlaying }: { nowPlaying: Movie[] }) {
	return (
		<>
			<div className='min-h-screen bg-black text-white relative overflow-hidden'>
				<CinematicElements />
				<FloatingElements />
				<CinematicHero nowPlaying={nowPlaying} />
				<NowPlayingSection nowPlaying={nowPlaying} />
			</div>
			<div className='flex justify-center mt-12'>
				<SeeMoreBtn
					url='/movies/collections/now-playing-movies'
					btnText='See More'
					className='bg-gradient-to-r from-red-900 via-red-700 to-red-800 hover:from-red-950 hover:via-red-800 hover:to-red-900 text-white px-8 py-3 text-lg font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-600/50 border-2 border-red-500/30 backdrop-blur-sm rounded-md group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-400/20 before:to-red-600/20 before:blur-xl before:animate-pulse'
				/>
			</div>
		</>
	);
}
