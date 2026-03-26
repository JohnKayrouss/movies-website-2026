import UserProfileHeader from "@/components/UserProfile/UserProfileHeader";
import { FloatingElements } from "@/components/Home/floating-elements";
import React, { Suspense } from "react";
import UserNavigationButtons from "@/components/UserProfile/UserNavigationButtons";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import UserProfileShimmer from "@/components/Shimmer/UserProfileShimmer";

export default function UserFavoriteMoviesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Suspense fallback={<UserProfileShimmer />}>
			<UserFavoriteMoviesLayoutContent>
				{children}
			</UserFavoriteMoviesLayoutContent>
		</Suspense>
	);
}
const UserFavoriteMoviesLayoutContent = async function ({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = await currentUser();
	if (!user) return redirect("/");

	return (
		<div>
			<FloatingElements />
			<UserProfileHeader />
			<UserNavigationButtons clerkId={user.id} />
			<div>{children}</div>
		</div>
	);
};
