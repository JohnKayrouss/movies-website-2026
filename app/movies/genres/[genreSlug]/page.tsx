import { getMoviesByGenre } from "@/actions/MoviesList";
import CollectionWrapper from "@/components/Collections/CollectionWrapper";
import SearchTermContainer from "@/components/SearchTerm/SearchTermContainer";
import MoviesPageWithHeaderShimmer from "@/components/Shimmer/MoviesPageWithHeaderShimmer";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
// adjusting params
export default function GenrePage({
	params,
	searchParams,
}: {
	params: Promise<{ genreSlug: string }>;
	searchParams: Promise<{ page: string }>;
}) {
	return (
		<Suspense fallback={<MoviesPageWithHeaderShimmer />}>
			<GenrePageContent params={params} searchParams={searchParams} />
		</Suspense>
	);
}
const GenrePageContent = async ({
	params,
	searchParams,
}: {
	params: Promise<{ genreSlug: string }>;
	searchParams: Promise<{ page: string }>;
}) => {
	const resolvedParams = await params;
	const resolvedSearchParams = await searchParams;
	const page = Math.max(1, Number(resolvedSearchParams.page) || 1);
	const genres = [
		{
			id: 28,
			name: "Action",
		},
		{
			id: 12,
			name: "Adventure",
		},
		{
			id: 16,
			name: "Animation",
		},
		{
			id: 35,
			name: "Comedy",
		},
		{
			id: 80,
			name: "Crime",
		},
		{
			id: 99,
			name: "Documentary",
		},
		{
			id: 18,
			name: "Drama",
		},
		{
			id: 10751,
			name: "Family",
		},
		{
			id: 14,
			name: "Fantasy",
		},
		{
			id: 36,
			name: "History",
		},
		{
			id: 27,
			name: "Horror",
		},
		{
			id: 10402,
			name: "Music",
		},
		{
			id: 9648,
			name: "Mystery",
		},
		{
			id: 10749,
			name: "Romance",
		},
		{
			id: 878,
			name: "Science Fiction",
		},
		{
			id: 10770,
			name: "TV Movie",
		},
		{
			id: 53,
			name: "Thriller",
		},
		{
			id: 10752,
			name: "War",
		},
		{
			id: 37,
			name: "Western",
		},
	];
	const movies = await getMoviesByGenre({
		genreId: resolvedParams.genreSlug,
		pageNumber: page,
	});
	const genre = genres.find(
		(genre) => genre.id === Number(resolvedParams.genreSlug)
	);
	if (page > 500) {
		redirect(`/movies/genres/${resolvedParams.genreSlug}?page=500`);
	}
	return (
		<SearchTermContainer searchTerm={genre?.name || ""}>
			<CollectionWrapper
				movieList={movies.results || []}
				totalPages={movies.total_pages > 500 ? 500 : movies.total_pages}
				currentPage={movies.page}
				ShowPagination={true}
				baseURL={`movies/genres/${resolvedParams.genreSlug}`}
			/>
		</SearchTermContainer>
	);
};
