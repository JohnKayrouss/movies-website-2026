import { SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { Button } from "../ui/button";
import { Info, Plus, User, Volume2 } from "lucide-react";

export default async function HeroUserButtons({
	isLoaded,
}: {
	isLoaded: boolean;
}) {
	const user = await currentUser();

	return (
		<div>
			<div
				className={`flex flex-wrap gap-6 pt-6 transition-all duration-1000 ${
					isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
				}`}
				style={{ transitionDelay: "2.5s" }}>
				<SignInButton mode='modal'>
					<Button className='bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-xl font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-600/50 group relative overflow-hidden cursor-pointer '>
						<>
							<User size={100} />
							Sign in
						</>
					</Button>
				</SignInButton>

				<Button
					size='lg'
					variant='outline'
					className='border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 px-8 py-4 text-xl transition-all duration-500 hover:scale-110 hover:border-yellow-400 bg-transparent backdrop-blur-sm group cursor-pointer'>
					<Plus className='mr-3 h-5 w-5 group-hover:rotate-90 transition-transform duration-300 cursor-pointer' />
					My List
				</Button>

				<Button
					size='lg'
					variant='ghost'
					className='text-white hover:bg-white/10 px-8 py-4 text-xl transition-all duration-500 hover:scale-110 group'>
					<Info className='mr-3 h-5 w-5 group-hover:animate-bounce' />
					More Info
				</Button>

				<Button
					size='lg'
					variant='ghost'
					className='text-white hover:bg-white/10 p-4 transition-all duration-500 hover:scale-125 group'>
					<Volume2 className='h-6 w-6 group-hover:animate-pulse' />
				</Button>
			</div>
		</div>
	);
}
