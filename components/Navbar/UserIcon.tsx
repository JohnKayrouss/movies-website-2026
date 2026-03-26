import { User } from "@clerk/nextjs/server";
import { User as Icon } from "lucide-react";
export default function UserIcon({ user }: { user: User | null }) {
	if (user) {
		return (
			<img
				src={user.imageUrl}
				alt=''
				className='h-5 w-5 rounded-full object-cover'
			/>
		);
	}
	if (!user) {
		return (
			<Icon className='rounded-full dark:bg-primary bg-gray-100 hover:bg-gray-200 dark:hover:bg-primary/90  min-h-[20px] min-w-[20px] p-[3px]' />
		);
	}
}
