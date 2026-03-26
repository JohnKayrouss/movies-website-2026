import { getUserFavoriteMovies } from "@/actions/userActions";
import UserFavoriteMoviesGrid from "@/components/UserProfile/UserFavoriteMoviesGrid";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import UserProfile_EmptyList from "@/components/UserProfile/EmptyList";

export default async function UserFavoriteMoviesPage() {
	const userFavoriteMovies = await getUserFavoriteMovies();
	const user = await currentUser();
	if (!user?.id) return redirect("/");

	if (userFavoriteMovies.length === 0)
		return <UserProfile_EmptyList header='No Favorites' />;

	return (
		<div className=''>
			<UserFavoriteMoviesGrid
				userFavoriteMovies={userFavoriteMovies}
				userId={user.id}
				page='favorites'
			/>
		</div>
	);
}
