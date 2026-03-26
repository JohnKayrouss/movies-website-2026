import { SignInButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function WatchListSignInButton() {
	return (
		<>
			<Button
				size='lg'
				variant='outline'
				className='border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 px-4 py-4 text-lg transition-all duration-500 hover:scale-110 hover:border-yellow-400 bg-transparent backdrop-blur-sm group cursor-pointer'>
				<Plus className='mr-3 h-5 w-5 group-hover:rotate-90 transition-transform duration-300 cursor-pointer' />
				<SignInButton mode='modal'>Watch list</SignInButton>
			</Button>
		</>
	);
}
