import CollectionContainer from "@/components/CollectionContainer";
import Breadcrumbing from "@/components/reusable/Breadcrumbing";
import CollectionHeader from "@/components/reusable/CollectionHeader";

export default function UpcomingMoviesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<CollectionContainer>
			<Breadcrumbing
				breadcrumbItems={[
					{
						label: "Upcoming Movies",
						href: ``,
						currentPage: true,
					},
				]}
			/>
			<CollectionHeader
				header={"Upcoming Movies"}
				subHeader={"Discover the upcoming movies of all time"}
			/>
			{children}
		</CollectionContainer>
	);
}
