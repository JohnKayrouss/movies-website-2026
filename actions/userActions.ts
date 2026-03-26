"use server";

import db from "@/prisma/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidateTag, unstable_cache } from "next/cache";

export const isUserExists = async (userId: string) => {
	const user = await db.userData.findUnique({
		where: { clerkId: userId },
		include: {
			favoriteMovies: true,
			watchlistMovies: true,
		},
	});
	if (!user) return false;
	return user;
};

export const isFavoriteMovie = async (userId: string, movieId: string) => {
	const existingUser = await isUserExists(userId);
	if (!existingUser) return false;

	// Cache the favorite check with tags
	const cachedFavoriteCheck = unstable_cache(
		async () => {
			const movieInFavorite = await db.favoriteMovies.findFirst({
				where: {
					movieId: movieId as string,
					UserFavorites: {
						clerkId: userId,
					},
				},
			});
			return !!movieInFavorite;
		},
		[`favorite-${userId}-${movieId}`], // cache key
		{
			tags: [`user-favorites-${userId}`, `movie-${movieId}-favorites`],
			revalidate: 60, // optional: cache for 60 seconds
		}
	);

	return await cachedFavoriteCheck();
};

export const isInWatchlistMovie = async (userId: string, movieId: string) => {
	const existingUser = await isUserExists(userId);
	if (!existingUser) return false;

	const movieInWatchlist = await db.wathclistMovies.findFirst({
		where: {
			movieId: movieId as string,
			UserFavorites: {
				clerkId: userId,
			},
		},
	});

	return !!movieInWatchlist;
};

//===================== toggle favorite and watchlist Movie =========================

/*

model FavoriteMovies {
  id               String         @id @default(cuid()) @map("_id")
  movieId          String
  movieTitle       String
  moviePosterPath  String
  movieRating      String
  movieReleaseDate String
  createdAt        DateTime       @default(now())
  updatedAt        DateTime       @updatedAt
  UserFavorites    UserFavorites? @relation(fields: [userFavoritesId], references: [id])
  userFavoritesId  String?
}


*/

interface FavoriteMovie {
	userId: string;
	movieId: string;
	movieTitle: string;
	moviePosterPath: string;
	movieRating: string;
	movieReleaseDate: string;
}
export const ToggleFavoriteMovie = async ({
	userId,
	movieId,
	movieTitle,
	moviePosterPath,
	movieRating,
	movieReleaseDate,
}: FavoriteMovie) => {
	const existingUser = await isUserExists(userId);
	if (!existingUser) {
		await db.userData.create({
			data: {
				clerkId: userId,
				favoriteMovies: {
					create: {
						clerkId: userId,
						movieId,
						movieTitle,
						moviePosterPath,
						movieRating,
						movieReleaseDate,
					},
				},
			},
		});
	}
	if (existingUser) {
		const isFavorite = existingUser.favoriteMovies.find(
			(movie) => movie.movieId === movieId
		);
		if (isFavorite && isFavorite.id) {
			await db.userData.update({
				where: { clerkId: userId },
				data: {
					favoriteMovies: {
						delete: {
							id: isFavorite.id,
						},
					},
				},
			});
		} else {
			await db.userData.update({
				where: { clerkId: userId },
				data: {
					favoriteMovies: {
						create: {
							clerkId: userId,
							movieId,
							movieTitle,
							moviePosterPath,
							movieRating,
							movieReleaseDate,
						},
					},
				},
			});
		}
	}

	// Revalidate only the specific tags that changed
	revalidateTag(`user-favorites-${userId}`);
	revalidateTag(`movie-${movieId}-favorites`);
};

interface WatchlistMovie {
	userId: string;
	movieId: string;
	movieTitle: string;
	moviePosterPath: string;
	movieRating: string;
	movieReleaseDate: string;
}
export const ToggleWatchlistMovie = async ({
	userId,
	movieId,
	movieTitle,
	moviePosterPath,
	movieRating,
	movieReleaseDate,
}: WatchlistMovie) => {
	const existingUser = await isUserExists(userId);
	if (!existingUser) {
		await db.userData.create({
			data: {
				clerkId: userId,
				watchlistMovies: {
					create: {
						clerkId: userId,
						movieId,
						movieTitle,
						moviePosterPath,
						movieRating,
						movieReleaseDate,
					},
				},
			},
		});
	}
	if (existingUser) {
		const isInWatchlist = existingUser.watchlistMovies.find(
			(movie) => movie.movieId === movieId
		);
		if (isInWatchlist && isInWatchlist.id) {
			await db.userData.update({
				where: { clerkId: userId },
				data: {
					watchlistMovies: {
						delete: {
							id: isInWatchlist.id,
						},
					},
				},
			});
		} else {
			await db.userData.update({
				where: { clerkId: userId },
				data: {
					watchlistMovies: {
						create: {
							clerkId: userId,
							movieId,
							movieTitle,
							moviePosterPath,
							movieRating,
							movieReleaseDate,
						},
					},
				},
			});
		}
	}

	// Revalidate only the specific tags that changed
	revalidateTag(`user-watchlist-${userId}`);
	revalidateTag(`movie-${movieId}-watchlist`);
};

//=====================  user favorite movies =========================

export const getUserFavoriteMovies = async () => {
	const user = await currentUser();
	if (!user?.id) return [];

	const userFavoriteMovies = unstable_cache(
		async () => {
			const data = await db.favoriteMovies.findMany({
				where: { clerkId: user.id },
				orderBy: { createdAt: "desc" },
			});
			return data;
		},
		[`user-favorites-list-${user.id}`],
		{
			tags: [`user-favorites-${user.id}`],
		}
	);

	return await userFavoriteMovies();
};
export const removeFavoriteMovie = async (movieId: string, userId: string) => {
	await db.favoriteMovies.deleteMany({
		where: {
			movieId: movieId,
			clerkId: userId,
		},
	});

	revalidateTag(`user-favorites-${userId}`);
	revalidateTag(`movie-${movieId}-favorites`);
};

//===================== get user watchlist movies =========================

export const getUserWatchlistMovies = async () => {
	const user = await currentUser();
	if (!user?.id) return [];

	const userWatchlistMovies = unstable_cache(
		async () => {
			const data = await db.wathclistMovies.findMany({
				where: { clerkId: user.id },
				orderBy: { createdAt: "desc" },
			});
			return data;
		},
		[`user-watchlist-list-${user.id}`],
		{
			tags: [`user-watchlist-${user.id}`],
		}
	);

	return await userWatchlistMovies();
};

export const removeWatchlistMovie = async (movieId: string, userId: string) => {
	await db.wathclistMovies.deleteMany({
		where: {
			movieId: movieId,
			clerkId: userId,
		},
	});

	revalidateTag(`user-watchlist-${userId}`);
	revalidateTag(`movie-${movieId}-watchlist`);
};
