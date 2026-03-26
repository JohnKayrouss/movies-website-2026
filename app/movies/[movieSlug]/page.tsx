import {
	getMovieRecommendations,
	getMovieVideos,
	getSingleMovie_basicInfo,
} from "@/actions/MoviesList";
import SingleMovieDetails from "@/components/singleMovie/SingleMovieDetails";
import MovieVisitTracker from "@/components/singleMovie/MovieVisitTracker";

export default async function page({
	params,
}: {
	params: Promise<{ movieSlug: string }>;
}) {
	const { movieSlug } = await params;
	const movie_basicInfoArr = await getSingleMovie_basicInfo({
		movieId: movieSlug,
	});
	const movieVideos = await getMovieVideos({ movieId: movieSlug });
	const movie_basicInfo = Array.isArray(movie_basicInfoArr)
		? movie_basicInfoArr[0]
		: movie_basicInfoArr;
	const movieRecommendations = await getMovieRecommendations({
		movieId: movieSlug,
	});

	return (
		<div className='mt-20 lg:mt-0'>
			<MovieVisitTracker
				movie={{
					id: movie_basicInfo.id,
					title: movie_basicInfo.title,
					poster_path: movie_basicInfo.poster_path || "",
					vote_average: movie_basicInfo.vote_average || 0,
					release_date: movie_basicInfo.release_date,
				}}>
				<div className='mt-0'>
					<SingleMovieDetails
						movieBasicInfo={movie_basicInfo}
						movieVideos={movieVideos}
						movieRecommendations={movieRecommendations}
					/>
				</div>
			</MovieVisitTracker>
		</div>
	);
}
