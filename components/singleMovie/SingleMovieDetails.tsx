import {
	CastInfo,
	Movie,
	MovieVideo,
	TMovieDetails_basicInfo,
} from "@/types/types";
import {
	getActorImage,
	getAllMovieGenres,
	getMovieBackdropPath,
	getMoviePosterPath,
	getRating,
} from "@/utils/HelperFunctions";

import SingleMovieHeroSection from "./SingleMovieHeroSection";
import SingleMovie_Trailers from "./SingleMovie_Trailers";
import SingleMovie_CastDetails from "./SingleMovie_CastDetails";
import MovieSectionWrapper from "../reusable/MovieSectionWrapper";
import { currentUser } from "@clerk/nextjs/server";
import { isFavoriteMovie, isInWatchlistMovie } from "@/actions/userActions";

interface Props {
	movieBasicInfo: TMovieDetails_basicInfo;
	movieVideos: MovieVideo[];
	movieRecommendations: Movie[];
}

export default async function MovieDetailsPage({
	movieBasicInfo,
	movieVideos,
	movieRecommendations,
}: Props) {
	const moviePosterPath = getMoviePosterPath(
		movieBasicInfo.poster_path || "/placeholder.svg"
	);
	const movieBackdropPath = getMovieBackdropPath(
		movieBasicInfo.backdrop_path || "/placeholder.svg"
	);
	const movieGenres = getAllMovieGenres(movieBasicInfo.genres);

	const movie = {
		id: movieBasicInfo.id,
		title: movieBasicInfo.title,
		year: new Date(movieBasicInfo.release_date).getFullYear(),
		rating: getRating(movieBasicInfo.vote_average),
		userScore: (movieBasicInfo.vote_average * 10).toFixed(1),
		duration: `${movieBasicInfo.runtime} min`,
		genre: movieGenres,
		director: movieBasicInfo.credits.crew[0].name,
		cast: movieBasicInfo.credits.cast.map((member) => member.name).slice(0, 5),
		synopsis: movieBasicInfo.overview || "",
		poster: moviePosterPath,
		backdrop: movieBackdropPath,
		movieBackdropPath: movieBackdropPath,
	};

	const trailers = movieVideos.map((video) => ({
		id: video.id,
		title: video.name,
		thumbnail: `https://img.youtube.com/vi/${video.key}/hqdefault.jpg`,
		duration: video.size.toString() + "p",
		type: video.type,
		key: video.key,
	}));

	const castInfo: CastInfo[] = movieBasicInfo.credits.cast.map((member) => ({
		name: member.name,
		character: member.character,
		profile_path: member.profile_path ? getActorImage(member.profile_path) : "",
	}));
	const user = await currentUser();
	let isLiked = false;
	let isInWatchlist = false;
	if (user) {
		const userFavorites = await isFavoriteMovie(
			user.id,
			movieBasicInfo.id.toString()
		);
		isLiked = userFavorites ? true : false;
		isInWatchlist = await isInWatchlistMovie(
			user.id,
			movieBasicInfo.id.toString()
		);
		isInWatchlist = isInWatchlist ? true : false;
	}
	return (
		<div className='min-h-screen bg-black text-white overflow-hidden'>
			<SingleMovieHeroSection
				movie={{ ...movie, id: movie.id.toString() }}
				moviePosterPath={moviePosterPath}
				vote_count={movieBasicInfo.vote_count}
				userId={user ? user.id : null}
				isLiked={isLiked}
				isInWatchlist={isInWatchlist}
			/>

			{/* Trailers Section */}
			<SingleMovie_Trailers trailers={trailers} />

			{/* Cast Details Section */}
			<SingleMovie_CastDetails castInfo={castInfo} />

			<section className='py-16 bg-gray-900 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10 animate-gradient-x' />
				<div className='container mx-auto px-4 md:px-6 relative z-10'>
					<h2 className='text-3xl font-bold mb-8 animate-fade-in-up'>
						Recommendations
					</h2>
					{/* Recommendations section */}
					<MovieSectionWrapper movieList={movieRecommendations} />
				</div>
			</section>
		</div>
	);
}
