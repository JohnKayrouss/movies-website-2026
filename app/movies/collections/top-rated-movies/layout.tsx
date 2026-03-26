import CollectionContainer from "@/components/CollectionContainer";
import Breadcrumbing from "@/components/reusable/Breadcrumbing";
import CollectionHeader from "@/components/reusable/CollectionHeader";

export default function TopRatedMoviesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<CollectionContainer>
			<Breadcrumbing
				breadcrumbItems={[
					{
						label: "Top Rated Movies",
						href: ``,
						currentPage: true,
					},
				]}
			/>
			<CollectionHeader
				header={"Top Rated Movies"}
				subHeader={"Discover the highest rated movies of all time"}
			/>
			{children}
		</CollectionContainer>
	);
}
