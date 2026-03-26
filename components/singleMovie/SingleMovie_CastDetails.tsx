"use client";
import { useState } from "react";
import { CastInfo } from "@/types/types";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { User } from "lucide-react";
import { Button } from "../ui/button";
export default function SingleMovie_CastDetails({
	castInfo,
}: {
	castInfo: CastInfo[];
}) {
	const [isClicked, setIsClicked] = useState(false);
	let firstBatch: CastInfo[] = [];
	let secondBatch: CastInfo[] = [];
	if (castInfo.length === 0) return null;
	if (castInfo.length > 12) {
		firstBatch = castInfo.slice(0, 12);
		secondBatch = castInfo.slice(12);
	} else {
		firstBatch = castInfo;
	}
	return (
		<section className='py-16 bg-gradient-to-b from-black to-gray-900'>
			<div className='container mx-auto px-4 md:px-6'>
				<h2 className='text-3xl font-bold mb-8 animate-fade-in-up'>Cast</h2>
				<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
					{firstBatch.map((actor, index) => (
						<Card
							key={index}
							className='bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 group animate-slide-in-left p-0'
							style={{ animationDelay: `${index * 0.1}s` }}>
							<CardContent className='p-4'>
								<div className='aspect-square mb-3 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center group-hover:from-purple-600/40 group-hover:to-pink-600/40 transition-all duration-500 overflow-hidden relative'>
									{actor.profile_path && (
										<Image
											src={actor.profile_path}
											alt={actor.name}
											fill
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
											className='rounded-lg object-cover transition-transform duration-500 group-hover:scale-110'
										/>
									)}
									{!actor.profile_path && (
										<div className='flex items-center justify-center h-full w-full'>
											<User className='w-20 h-20 text-gray-400/20' />
										</div>
									)}
								</div>
								<div>
									<h3 className='font-semibold text-white group-hover:text-purple-300 transition-colors'>
										{actor.name}
									</h3>
									<p className='text-sm text-gray-400 '>{actor.character}</p>
								</div>
							</CardContent>
						</Card>
					))}
					{isClicked &&
						secondBatch.map((actor, index) => (
							<Card
								key={index}
								className='bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 group animate-slide-in-left p-0'
								style={{ animationDelay: `${index * 0.1}s` }}>
								<CardContent className='p-4'>
									<div className='aspect-square mb-3 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center group-hover:from-purple-600/40 group-hover:to-pink-600/40 transition-all duration-500 overflow-hidden relative'>
										{actor.profile_path && (
											<Image
												src={actor.profile_path}
												alt={actor.name}
												fill
												sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
												className='rounded-lg object-cover transition-transform duration-500 group-hover:scale-110'
											/>
										)}
										{!actor.profile_path && (
											<div className='flex items-center justify-center h-full w-full'>
												<User className='w-20 h-20 text-gray-400/20' />
											</div>
										)}
									</div>
									<div>
										<h3 className='font-semibold text-white group-hover:text-purple-300 transition-colors'>
											{actor.name}
										</h3>
										<p className='text-sm text-gray-400 '>{actor.character}</p>
									</div>
								</CardContent>
							</Card>
						))}
				</div>
				{!isClicked && castInfo.length > 12 && (
					<div className='flex items-center justify-center py-10'>
						<Button
							onClick={() => setIsClicked(!isClicked)}
							size='lg'
							className={
								"bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-600/25 cursor-pointer "
							}>
							See More
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}
