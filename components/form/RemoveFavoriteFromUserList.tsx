"use client";
import { Trash2 } from "lucide-react";
import { removeFavoriteMovie } from "@/actions/userActions";
import { useFormStatus } from "react-dom";

export default function RemoveFavoriteFromUserList({
	movieId,
	userId,
}: {
	movieId: string;
	userId: string;
}) {
	const handleRemoveFavoriteMovie = async () => {
		await removeFavoriteMovie(movieId, userId);
	};
	const { pending } = useFormStatus();
	return (
		<button
			onClick={handleRemoveFavoriteMovie}
			disabled={pending}
			className='text-gray-400 hover:text-red-500 hover:scale-110 transition-colors p-3 cursor-pointer'>
			<Trash2 className='h-[32px] w-[32px] hover:rotate-360 transition-all duration-300 ease-in-out' />
		</button>
	);
}
