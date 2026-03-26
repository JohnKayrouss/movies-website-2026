"use client";
import { Clapperboard, Film } from "lucide-react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";

export default function UserNavigationButtons({
	clerkId,
}: {
	clerkId: string;
}) {
	const pathname = usePathname();
	const [activeLink, setActiveLink] = React.useState("");
	const userInUrl = pathname.includes(clerkId);
	React.useEffect(() => {
		if (pathname.includes(`/favorites`)) {
			setActiveLink("favorites");
		} else if (pathname.includes(`/watchlist`)) {
			setActiveLink("watchlist");
		} else {
			setActiveLink("");
		}
	}, [pathname]);
	if (!userInUrl) return redirect("/");

	return (
		<>
			<div className='flex items-center justify-center mb-8 mt-0 px-4'>
				<div className='relative flex bg-black/20 border border-white/10 rounded-full p-1 shadow-lg shadow-black/25 w-full gap-2 max-w-sm'>
					{/* Sliding Background */}
					<div
						className={`absolute top-1 bottom-1 bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-300 ease-in-out shadow-lg shadow-primary/30 ${
							activeLink === "favorites"
								? "left-1 right-1/2 mr-0.5"
								: activeLink === "watchlist"
								? "left-1/2 right-1 ml-0.5"
								: "opacity-0"
						}`}
					/>

					{/* Buttons */}
					<button
						className={`flex-1 relative z-10 transition-all duration-300 rounded-full hover:bg-primary/20  ${
							activeLink === "favorites"
								? "text-white font-medium"
								: "text-gray-300"
						}`}>
						<Link
							href={`/user-profile/${clerkId}/favorites`}
							className='flex items-center justify-center gap-2 py-3'>
							<Film className='w-5 h-5 text-orange-900' />
							<span className='font-medium'>Favorites</span>
						</Link>
					</button>
					<button
						className={`flex-1 relative z-10 transition-all duration-300 rounded-full hover:bg-primary/20  ${
							activeLink === "watchlist"
								? "text-white font-medium"
								: "text-gray-300"
						}`}>
						<Link
							href={`/user-profile/${clerkId}/watchlist`}
							className='flex items-center justify-center gap-2 py-3'>
							<Clapperboard className='w-5 h-5 text-orange-900' />
							<span className='font-medium'>Watchlist</span>
						</Link>
					</button>
				</div>
			</div>

			{/* Animated Underline */}
			<div className='flex justify-center mb-8 px-4'>
				<div className='relative w-[70%] h-1'>
					<div className='absolute inset-0 bg-primary/20' />
					<div
						className='absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80'
						style={{
							animation: "brightnessSweep 4s infinite ease-in-out",
							width: "40%",
							left: "30%",
						}}
					/>
				</div>
			</div>

			<style jsx>{`
				@keyframes brightnessSweep {
					0% {
						transform: translateX(-50%);
					}
					50% {
						transform: translateX(50%);
					}
					100% {
						transform: translateX(-50%);
					}
				}
			`}</style>
		</>
	);
}
