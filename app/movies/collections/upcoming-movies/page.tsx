import { upcoming_movies } from "@/actions/MoviesList";
import CollectionWrapper from "@/components/Collections/CollectionWrapper";
import MoviesPageShimmer from "@/components/Shimmer/MoviesPageShimmer";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface Props {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function UpcomingMoviesPage({ searchParams }: Props) {
	return (
		<Suspense fallback={<MoviesPageShimmer />}>
			<UpcomingMoviesPageContent searchParams={searchParams} />
		</Suspense>
	);
}
const UpcomingMoviesPageContent = async ({ searchParams }: Props) => {
	const params = await searchParams;
	const pagenum = Math.max(1, Number(params.page) || 1);

	// TMDB API has a maximum of 500 pages, redirect if user tries to access higher
	if (pagenum > 500) {
		redirect("/movies/collections/now-playing-movies?page=500");
	}

	const upcomingMovies = await upcoming_movies(pagenum);

	return (
		<CollectionWrapper
			movieList={upcomingMovies.results || []}
			totalPages={upcomingMovies.total_pages || 500}
			currentPage={pagenum}
			baseURL={`movies/collections/upcoming-movies`}
		/>
	);
};
