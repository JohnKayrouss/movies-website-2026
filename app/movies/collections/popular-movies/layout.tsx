import CollectionContainer from "@/components/CollectionContainer";
import Breadcrumbing from "@/components/reusable/Breadcrumbing";
import CollectionHeader from "@/components/reusable/CollectionHeader";

export default function PopularMoviesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<CollectionContainer>
			<Breadcrumbing
				breadcrumbItems={[
					{
						label: "Popular Movies",
						href: ``,
						currentPage: true,
					},
				]}
			/>
			<CollectionHeader
				header={"Popular Movies"}
				subHeader={"Discover the most popular movies of all time"}
			/>
			{children}
		</CollectionContainer>
	);
}
