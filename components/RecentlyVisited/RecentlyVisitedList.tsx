import { X } from "lucide-react";
import MovieCard from "../Home/MovieCard";
import { Movie } from "@/types/types";

interface Props {
	moviesForDisplay: Movie[];
	removeRecentMovie: (movieId: number) => void;
}
export default function RecentlyVisitedList({
	moviesForDisplay,
	removeRecentMovie,
}: Props) {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
			{moviesForDisplay.map((movie, index) => (
				<div
					key={movie.id}
					className='relative group transform hover:scale-105 transition-all duration-300'>
					{/* Remove button */}
					<button
						onClick={() => removeRecentMovie(movie.id)}
						className='absolute top-2 right-2 z-20 bg-red-500/80 hover:bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'
						title='Remove from recently visited'>
						<X className='w-3 h-3' />
					</button>

					{/* Visit rank badge */}
					<div className='absolute top-2 left-2 z-10 bg-orange-500/90 text-white text-xs px-2 py-1 rounded-full font-medium'>
						#{index + 1}
					</div>

					<MovieCard movie={movie} variant='fourItems' />
				</div>
			))}
		</div>
	);
}
