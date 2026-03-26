import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Recently Visited Movies | MovieApp",
	description:
		"View your recently visited movies and continue watching where you left off.",
};

export default function RecentlyVisitedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
