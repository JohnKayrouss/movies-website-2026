import {
	now_playing,
	popular_movies,
	topRated_movies,
	upcoming_movies,
} from "@/actions/MoviesList";
import Hero from "@/components/Home/Hero";
import PopularSection from "@/components/Home/PopularSection";
import TopRatedSection from "@/components/Home/TopRatedSection";
import UpcomingSection from "@/components/Home/UpcomingSection";
import { Suspense } from "react";
import HomePageShimmer from "@/components/Shimmer/HomePageShimmer";

const HomePage = async () => {
	return (
		<Suspense fallback={<HomePageShimmer />}>
			<HomePageContent />
		</Suspense>
	);
};

const HomePageContent = async () => {
	const nowPlaying = await now_playing();
	const popularMovies = await popular_movies();
	const upcomingMovies = await upcoming_movies();
	const topRatedMovies = await topRated_movies();

	return (
		<main className='mt-20 scrollbar-hidden bg-black text-white '>
			<Hero nowPlaying={nowPlaying.results} />
			<UpcomingSection upcomingMovies={upcomingMovies.results} />
			<PopularSection popularMovies={popularMovies.results} />
			<TopRatedSection topRatedMovies={topRatedMovies.results} />
		</main>
	);
};
export default HomePage;
