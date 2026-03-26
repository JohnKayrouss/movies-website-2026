import CollectionContainer from "@/components/CollectionContainer";
import Breadcrumbing from "@/components/reusable/Breadcrumbing";
import CollectionHeader from "@/components/reusable/CollectionHeader";

export default function SearchTermContainer({
	children,
	searchTerm = "Movies",
}: {
	children: React.ReactNode;
	searchTerm: string;
}) {
	return (
		<CollectionContainer>
			<Breadcrumbing
				breadcrumbItems={[
					{
						label: `${searchTerm}`,
						href: ``,
						currentPage: true,
					},
				]}
			/>
			<CollectionHeader
				header={`Results for ${searchTerm}`}
				subHeader={`Explore the movies that match your search`}
			/>
			{children}
		</CollectionContainer>
	);
}
