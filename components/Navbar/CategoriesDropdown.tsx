"use client";

import * as React from "react";

import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function CategoriesDropdown() {
	const router = useRouter();
	const [selectedCategory, setSelectedCategory] = React.useState<string>("");
	const categories = [
		{
			label: "Now Playing",
			link: "/movies/collections/now-playing-movies",
		},
		{
			label: "Popular",
			link: "/movies/collections/popular-movies",
		},
		{
			label: "Top Rated",
			link: "/movies/collections/top-rated-movies",
		},
		{
			label: "Upcoming",
			link: "/movies/collections/upcoming-movies",
		},
	];
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className='bg-primary/20 backdrop-blur-sm border-white/20 text-white/90 hover:bg-white/10 hover:text-white hover:border-primary/50 transition-all duration-300 px-6 py-2 rounded-full font-medium relative overflow-hidden group flex items-center justify-center w-32 min-w-32 max-w-32'>
					<span className='relative z-10 px-2 flex items-center justify-center'>
						Categories
					</span>
					{/* Shimmer effect */}
					<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700' />
					{/* Glow effect */}
					<div className='absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full' />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56 bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl p-2'>
				{/* Animated background particles */}
				<div className='absolute inset-0 overflow-hidden pointer-events-none rounded-xl'>
					<div
						className='absolute top-2 left-4 w-1 h-1 bg-primary/40 rounded-full animate-ping'
						style={{ animationDelay: "0s" }}
					/>
					<div
						className='absolute bottom-3 right-6 w-0.5 h-0.5 bg-yellow-400/30 rounded-full animate-pulse'
						style={{ animationDelay: "1s" }}
					/>
				</div>

				{categories.map((item, idx) => {
					const isSelected = selectedCategory === item.label;
					return (
						<DropdownMenuItem
							key={idx}
							onClick={() => {
								setSelectedCategory(item.label);
								router.push(item.link);
							}}
							className={`text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white rounded-lg px-3 py-2 cursor-pointer transition-all duration-300 relative group ${
								isSelected ? "bg-primary/20 text-primary" : ""
							}`}>
							<span className='relative z-10'>{item.label}</span>
							{/* Hover underline effect */}
							<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-300 rounded-full' />
							{/* Selected state glow */}
							{isSelected && (
								<div className='absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-lg' />
							)}
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
