"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function SearchMovie() {
	const [searchInput, setSearchInput] = useState("");
	const router = useRouter();

	const handleSearch = () => {
		if (searchInput.trim()) {
			router.push(
				`/movies/search?query=${encodeURIComponent(searchInput.trim())}`
			);
			setSearchInput("");
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<div className='relative flex-1 max-w-xs md:max-w-sm lg:max-w-md ml-auto'>
			<Search className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none z-10' />
			<input
				type='text'
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
				onKeyPress={handleKeyPress}
				name='searchTerm'
				placeholder='Find a movie...'
				className='w-full pl-10 pr-12 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out'
			/>
			<Button
				type='submit'
				size='sm'
				onClick={handleSearch}
				className='absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 rounded-full bg-primary/30 hover:bg-primary/50 text-white border-0 cursor-pointer transition-all duration-300 ease-in-out group'>
				<Search className='h-5 w-5 group-hover:rotate-360 transition-transform duration-300 cursor-pointer' />
			</Button>
		</div>
	);
}
