"use client";
import { ToggleWatchlistMovie } from "@/actions/userActions";
import { Button } from "../ui/button";
import { ListCheck, Plus } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function WatchListToggleButton({
	isInWatchlist,
	movieId,
	userId,
	movieTitle,
	moviePosterPath,
	movieRating,
	movieReleaseDate,
}: {
	isInWatchlist: boolean;
	movieId: string;
	userId: string;
	movieTitle: string;
	moviePosterPath: string;
	movieRating: string;
	movieReleaseDate: string;
}) {
	const handleToggleWatchList = async () => {
		await ToggleWatchlistMovie({
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
			{isInWatchlist ? (
				<Button
					onClick={handleToggleWatchList}
					disabled={pending}
					size='lg'
					variant='outline'
					className='border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 px-4 py-0 text-lg transition-all duration-500 hover:scale-110 hover:border-yellow-400 bg-transparent backdrop-blur-sm group cursor-pointer'>
					<ListCheck
						className='mr-3 h-7 w-7 group-hover:rotate-360 transition-transform duration-300 cursor-pointer '
						fill='currentColor'
						size={40}
					/>
					Watch list
				</Button>
			) : (
				<Button
					onClick={handleToggleWatchList}
					disabled={pending}
					size='lg'
					variant='outline'
					className='border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 px-4 py-4 text-lg transition-all duration-500 hover:scale-110 hover:border-yellow-400 bg-transparent backdrop-blur-sm group cursor-pointer'>
					<Plus className='mr-3 h-5 w-5 group-hover:rotate-90 transition-transform duration-300 cursor-pointer' />
					Watch list
				</Button>
			)}
		</>
	);
}
