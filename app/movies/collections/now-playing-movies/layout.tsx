import CollectionContainer from "@/components/CollectionContainer";
import Breadcrumbing from "@/components/reusable/Breadcrumbing";
import CollectionHeader from "@/components/reusable/CollectionHeader";

export default function NowPlayingMoviesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<CollectionContainer>
			<Breadcrumbing
				breadcrumbItems={[
					{
						label: "Now Playing Movies",
						href: ``,
						currentPage: true,
					},
				]}
			/>
			<CollectionHeader
				header={"Now Playing Movies"}
				subHeader={"Discover the movies that are currently playing in theaters"}
			/>
			{children}
		</CollectionContainer>
	);
}
