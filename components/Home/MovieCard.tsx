import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Movie } from "@/types/types";
import {
	getOnlyTwoMovieGenres,
	getMoviePosterPath,
	getRating,
	getMovieReleaseDate_year_month,
} from "@/utils/HelperFunctions";
import Link from "next/link";

interface MovieCardProps {
	movie: Movie;
	variant?:
		| "default"
		| "large"
		| "compact"
		| "featured"
		| "medium"
		| "fourItems";
	className?: string;
}

export default function MovieCard({
	movie,
	variant = "default",
	className = "",
}: MovieCardProps) {
	const cardVariants = {
		default:
			"w-[220px] sm:w-[240px] lg:w-[260px] xl:w-[380px] 2xl:w-[420px] aspect-[2/3]",
		medium: "w-[500px] aspect-[3/4]",
		large: "w-[220px] aspect-[2/3] scale-110",
		compact: "w-full aspect-[16/9]",
		featured: "w-full aspect-[16/9]",
		fourItems:
			"w-[300px] sm:w-[240px] md:w-[220px] lg:w-[260px] xl:w-[280px] 2xl:w-[340px] aspect-[2/3]",
	};

	const moviePosterPath =
		getMoviePosterPath(movie.poster_path) || "/placeholder.svg";
	const movieGenres = getOnlyTwoMovieGenres(movie.genre_ids);
	const movieReleaseDate = getMovieReleaseDate_year_month(movie);

	return (
		<Link href={`/movies/${movie.id}`} className='group'>
			<Card
				className={`bg-transparent border-none shadow-none overflow-hidden ${cardVariants[variant]} ${className}`}>
				<CardContent className='p-0 relative h-full border-none shadow-none'>
					<div className='relative h-full overflow-hidden rounded-xl'>
						<Image
							src={moviePosterPath || "/placeholder.svg"}
							alt={movie.title}
							fill
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							className='object-cover transition-all duration-700 group-hover:scale-110'
						/>

						{/* Gradient Overlay */}
						<div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

						{/* Rating Badge */}
						<div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
							<Badge className='bg-yellow-500/90 text-black font-semibold'>
								<Star className='w-3 h-3 mr-1 fill-current' />
								{getRating(movie.vote_average)}
							</Badge>
						</div>

						<div className='absolute inset-0 p-4 flex items-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/30'>
							<div className='w-full'>
								<h3 className='font-bold text-white md:text-lg line-clamp-2 pl-[2px]'>
									{movie.title}
								</h3>
								{/* <p className='text-gray-300 text-sm'>{movieReleaseDate}</p> */}

								<div className='flex flex-wrap gap-1 '>
									{movieGenres.map((g) => (
										<Badge
											key={g}
											variant='secondary'
											className='text-xs bg-black text-white pb-2 '>
											{g}
										</Badge>
									))}
								</div>
								<Badge
									variant='secondary'
									className={`bg-black text-primary font-semibold  text-xs lg:text-sm `}>
									{movieReleaseDate}
								</Badge>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}
