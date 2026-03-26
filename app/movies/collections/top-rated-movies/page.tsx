import { topRated_movies } from "@/actions/MoviesList";
import CollectionWrapper from "@/components/Collections/CollectionWrapper";
import MoviesPageShimmer from "@/components/Shimmer/MoviesPageShimmer";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface Props {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
export default function TopRatedMoviesPage({ searchParams }: Props) {
	return (
		<Suspense fallback={<MoviesPageShimmer />}>
			<TopRatedMoviesPageContent searchParams={searchParams} />
		</Suspense>
	);
}
const TopRatedMoviesPageContent = async ({ searchParams }: Props) => {
	const params = await searchParams;
	const pagenum = Math.max(1, Number(params.page) || 1);

	if (pagenum > 500) {
		redirect("/movies/collections/now-playing-movies?page=500");
	}

	const topRatedMovies = await topRated_movies(pagenum);

	return (
		<CollectionWrapper
			movieList={topRatedMovies.results || []}
			totalPages={topRatedMovies.total_pages || 500}
			currentPage={pagenum}
			baseURL={`movies/collections/top-rated-movies`}
		/>
	);
};
