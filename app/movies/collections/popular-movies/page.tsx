import { popular_movies } from "@/actions/MoviesList";
import CollectionWrapper from "@/components/Collections/CollectionWrapper";
import MoviesPageShimmer from "@/components/Shimmer/MoviesPageShimmer";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface Props {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function PopularMoviesPage({ searchParams }: Props) {
	return (
		<Suspense fallback={<MoviesPageShimmer />}>
			<PopularMoviesPageContent searchParams={searchParams} />
		</Suspense>
	);
}
const PopularMoviesPageContent = async ({ searchParams }: Props) => {
	const params = await searchParams;
	const pagenum = Math.max(1, Number(params.page) || 1);

	// TMDB API has a maximum of 500 pages, redirect if user tries to access higher
	if (pagenum > 500) {
		redirect("/movies/collections/popular-movies?page=500");
	}

	const popularMovies = await popular_movies(pagenum);

	return (
		<CollectionWrapper
			movieList={popularMovies.results || []}
			totalPages={popularMovies.total_pages || 500}
			currentPage={pagenum}
			baseURL={`movies/collections/popular-movies`}
		/>
	);
};
