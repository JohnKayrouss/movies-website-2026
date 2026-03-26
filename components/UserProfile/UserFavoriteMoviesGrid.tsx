import React from "react";
import UserMovieCard from "./UserMovieCard";
import { FavoriteMovies } from "@prisma/client";
import { getMoviePosterPath } from "@/utils/HelperFunctions";

export default function UserFavoriteMoviesGrid({
	userFavoriteMovies,
	userId,
	page,
}: {
	userFavoriteMovies: FavoriteMovies[];
	userId: string;
	page: "watchlist" | "favorites";
}) {
	return (
		<div className='flex flex-col gap-6 max-w-4xl mx-auto'>
			{userFavoriteMovies.map((movie) => (
				<UserMovieCard
					key={movie.id}
					moviePosterPath={getMoviePosterPath(movie.moviePosterPath)}
					movieTitle={movie.movieTitle}
					movieReleaseDate={movie.movieReleaseDate}
					movieRating={movie.movieRating}
					movieId={movie.movieId}
					userId={userId}
					page={page}
				/>
			))}
		</div>
	);
}
