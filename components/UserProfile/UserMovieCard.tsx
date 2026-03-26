import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";
import RemoveFavoriteFromUserList from "../form/RemoveFavoriteFromUserList";
import RemoveWatchlistMovieFromUserList from "../form/RemoveWatchlistMovieFromUserList";

interface UserMovieCardProps {
	moviePosterPath: string;
	movieTitle: string;
	movieReleaseDate: string;
	movieRating: string;
	movieId: string;
	userId: string;
	page: "watchlist" | "favorites";
}

export default function UserMovieCard({
	moviePosterPath,
	movieTitle,
	movieReleaseDate,
	movieRating,
	movieId,
	userId,
	page,
}: UserMovieCardProps) {
	return (
		<Card className='group overflow-hidden bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 py-2 hover:scale-105'>
			<CardContent className='px-2  flex justify-between items-center'>
				{/* Movie Poster */}
				<Link
					href={`/movies/${movieId}`}
					className='flex  gap-4  w-[30%] justify-between '>
					<>
						<div className='relative flex-shrink-0 w-16 h-24 rounded-md overflow-hidden'>
							<Image
								src={moviePosterPath}
								alt={movieTitle}
								fill
								className='object-cover transition-transform duration-300 group-hover:scale-105'
							/>
						</div>

						{/* Movie Info */}
						<div className='flex-1 min-w-0 flex flex-col justify-center '>
							<h3 className='text-white font-medium text-lg truncate group-hover:text-primary   duration-300 ease-in-out transition-all'>
								{movieTitle}
							</h3>
							<div className='flex items-center gap-2 mt-2'>
								<p className='text-gray-400 text-sm'>
									{new Date(movieReleaseDate).getFullYear()}
								</p>
								<span className='text-gray-500'>•</span>
								<div className='flex items-center gap-1'>
									<Star className='h-4 w-4 text-yellow-500 fill-current' />
									<span className='text-gray-300 text-sm'>{movieRating}</span>
								</div>
							</div>
						</div>
					</>
				</Link>

				{/* Remove Button */}
				<div className='flex-shrink-0'>
					{page === "favorites" ? (
						<RemoveFavoriteFromUserList movieId={movieId} userId={userId} />
					) : (
						<RemoveWatchlistMovieFromUserList
							movieId={movieId}
							userId={userId}
						/>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
