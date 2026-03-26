"use client";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { ToggleFavoriteMovie } from "@/actions/userActions";
import { useFormStatus } from "react-dom";

export default function FavoriteToggleButton({
	isLiked,
	movieId,
	userId,
	movieTitle,
	moviePosterPath,
	movieRating,
	movieReleaseDate,
}: {
	isLiked: boolean;
	movieId: string;
	userId: string;
	movieTitle: string;
	moviePosterPath: string;
	movieRating: string;
	movieReleaseDate: string;
}) {
	const handleAddFavoriteMovie = async () => {
		await ToggleFavoriteMovie({
			userId,
			movieId,
			movieTitle,
			moviePosterPath,
			movieRating,
			movieReleaseDate,
		});
	};
	const { pending } = useFormStatus();
	return (
		<>
			{isLiked ? (
				<Button
					onClick={handleAddFavoriteMovie}
					disabled={pending}
					asChild
					variant={"outline"}
					size={"icon"}
					className='cursor-pointer p-2 text-red-600 hover:text-red-700 transition-all duration-300 hover:scale-110'>
					<Heart className='' size={20} fill='currentColor' />
				</Button>
			) : (
				<Button
					onClick={handleAddFavoriteMovie}
					disabled={pending}
					asChild
					variant={"outline"}
					size={"icon"}
					className='cursor-pointer p-2 text-white hover:text-red-700 transition-all duration-300 hover:scale-110'>
					<Heart className='' size={20} />
				</Button>
			)}
		</>
	);
}
