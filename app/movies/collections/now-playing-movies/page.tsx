import { now_playing } from "@/actions/MoviesList";
import CollectionWrapper from "@/components/Collections/CollectionWrapper";
import MoviesPageShimmer from "@/components/Shimmer/MoviesPageShimmer";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface Props {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
export default function NowPlayingPage({ searchParams }: Props) {
	return (
		<Suspense fallback={<MoviesPageShimmer />}>
			<NowPlayingPageContent searchParams={searchParams} />
		</Suspense>
	);
}
const NowPlayingPageContent = async ({ searchParams }: Props) => {
	const params = await searchParams;
	const pagenum = Math.max(1, Number(params.page) || 1);

	// TMDB API has a maximum of 500 pages, redirect if user tries to access higher
	if (pagenum > 500) {
		redirect("/movies/collections/now-playing-movies?page=500");
	}

	const nowPlaying = await now_playing(pagenum);

	return (
		<CollectionWrapper
			movieList={nowPlaying.results || []}
			totalPages={nowPlaying.total_pages > 500 ? 500 : nowPlaying.total_pages}
			currentPage={pagenum}
			baseURL={`movies/collections/now-playing-movies`}
		/>
	);
};
