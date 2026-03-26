import { searchMovies } from "@/actions/searchMovies";
import CollectionWrapper from "@/components/Collections/CollectionWrapper";
import SearchTermContainer from "@/components/SearchTerm/SearchTermContainer";
import MoviesPageWithHeaderShimmer from "@/components/Shimmer/MoviesPageWithHeaderShimmer";
import { Suspense } from "react";

interface Props {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function NowPlayingPage({ searchParams }: Props) {
	return (
		<Suspense fallback={<MoviesPageWithHeaderShimmer />}>
			<SearchPageContent searchParams={searchParams} />
		</Suspense>
	);
}
const SearchPageContent = async ({ searchParams }: Props) => {
	const params = await searchParams;
	const query = params.query as string;
	const movies = await searchMovies(query);

	return (
		<SearchTermContainer searchTerm={query}>
			<CollectionWrapper
				movieList={movies.results || []}
				totalPages={movies.total_pages || 500}
				currentPage={1}
				ShowPagination={false}
				baseURL={`movies/search?query=${query}`}
			/>
		</SearchTermContainer>
	);
};
