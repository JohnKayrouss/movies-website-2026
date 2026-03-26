import { getUserWatchlistMovies } from "@/actions/userActions";
import UserProfile_EmptyList from "@/components/UserProfile/EmptyList";
import UserWatchlistMoviesGrid from "@/components/UserProfile/UserWatchlistMoviesGrid";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function UserWatchlistMoviesPage() {
	const userWatchlistMovies = await getUserWatchlistMovies();
	const user = await currentUser();
	if (!user?.id) return redirect("/");
	if (userWatchlistMovies.length === 0)
		return <UserProfile_EmptyList header='No Watchlist' />;

	return (
		<div className=''>
			<UserWatchlistMoviesGrid
				userWatchlistMovies={userWatchlistMovies}
				userId={user.id}
				page='watchlist'
			/>
		</div>
	);
}
