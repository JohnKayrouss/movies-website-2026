"use client";

import { useEffect } from "react";
import { trackMovieVisit } from "@/utils/recentlyVisited";

interface MovieVisitTrackerProps {
	movie: {
		id: number;
		title: string;
		poster_path: string;
		vote_average: number;
		release_date: string;
	};
	children: React.ReactNode;
}

export default function MovieVisitTracker({
	movie,
	children,
}: MovieVisitTrackerProps) {
	useEffect(() => {
		// Track the visit when component mounts (when user views the movie page)
		trackMovieVisit({
			id: movie.id,
			title: movie.title,
			poster_path: movie.poster_path,
			vote_average: movie.vote_average,
			release_date: movie.release_date,
		});
	}, [
		movie.id,
		movie.title,
		movie.poster_path,
		movie.vote_average,
		movie.release_date,
	]);

	return <>{children}</>;
}
