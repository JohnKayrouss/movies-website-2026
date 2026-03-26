import React from "react";
import { MovieTheaterTransition } from "./movie-theater-transition";
import { FilmStripCarousel } from "./film-strip-carousel";
import { Movie } from "@/types/types";

export default function NowPlayingSection({
	nowPlaying,
}: {
	nowPlaying: Movie[];
}) {
	return (
		<div>
			<MovieTheaterTransition delay={100}>
				<FilmStripCarousel movies={nowPlaying} title='Now Playing' />
			</MovieTheaterTransition>
		</div>
	);
}
