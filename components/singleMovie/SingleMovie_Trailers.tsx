"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import youtubeLogo from "@/public/svg/youtube.svg";
import { PlayCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

interface TrailerProps {
	trailers: {
		id: string;
		title: string;
		thumbnail: string;
		duration: string;
		type: string;
		key: string;
	}[];
}
export default function SingleMovie_Trailers({ trailers }: TrailerProps) {
	const [isClicked, setIsClicked] = useState(false);
	let firstBatch: TrailerProps["trailers"];
	let secondBatch: TrailerProps["trailers"];

	if (trailers.length > 8) {
		firstBatch = trailers.slice(0, 8);
		secondBatch = trailers.slice(8);
	} else {
		firstBatch = trailers;
		secondBatch = [];
	}
	return (
		<section className='py-16 bg-gradient-to-b from-gray-900 to-purple-900/20 px-4 lg:px-0'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex items-center gap-3 mb-8'>
					<div className='p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg'>
						<PlayCircle className='w-6 h-6 text-white' />
					</div>
					<h2 className='text-3xl font-bold text-white'>Videos & Trailers</h2>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{firstBatch.map((trailer, index) => (
						<Card
							key={trailer.id}
							className='bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group cursor-pointer animate-fade-in-up px-0 pt-0 pb-2'
							style={{ animationDelay: `${index * 0.1}s` }}>
							<div className='aspect-video relative  overflow-hidden rounded-t-lg w-full h-full'>
								<Image
									src={trailer.thumbnail || "/placeholder.svg"}
									alt={trailer.title}
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-cover transition-transform duration-500 group-hover:scale-110'
								/>

								{/* Duration Badge */}
								<div className='absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded'>
									{trailer.duration}
								</div>

								{/* Type Badge */}
								<div className='absolute top-2 left-2 bg-red-600/90 text-white text-xs px-2 py-1 rounded'>
									{trailer.type}
								</div>
							</div>

							<div className='p-2 flex  gap-2  items-center justify-between '>
								<h3 className='font-semibold text-white text-sm group-hover:text-red-300 transition-colors line-clamp-2   w-[85%]'>
									{trailer.title}
								</h3>

								<Dialog>
									<DialogTrigger>
										<Image
											src={youtubeLogo}
											alt='icon'
											width={40}
											height={40}
											className='cursor-pointer'
										/>
									</DialogTrigger>
									<DialogContent className='px-0 pt-4 bg-gray-900 border-white/10 hover:bg-gray-800 transition-all duration-500 '>
										<DialogHeader className='p-0 m-0'>
											<DialogTitle className='text-white pl-2 pr-8'>
												{trailer.title}
											</DialogTitle>
											<DialogDescription>
												<CardContent className='m-0 p-0 mt-4 rounded-none'>
													<iframe
														src={`https://www.youtube.com/embed/${trailer.key}`}
														allowFullScreen
														className={
															"min-h-[260px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[360px]"
														}
														height={"auto"}
														width={"100%"}
													/>
												</CardContent>
											</DialogDescription>
										</DialogHeader>
									</DialogContent>
								</Dialog>
							</div>
						</Card>
					))}
					{isClicked &&
						secondBatch.map((trailer, index) => (
							<Card
								key={trailer.id}
								className='bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105  group cursor-pointer animate-fade-in-up px-0 pt-0 pb-2'
								style={{ animationDelay: `${index * 0.1}s` }}>
								<CardContent className='p-0'>
									<div className='aspect-video relative overflow-hidden rounded-t-lg'>
										<Image
											src={trailer.thumbnail || "/placeholder.svg"}
											alt={trailer.title}
											fill
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
											className='object-cover transition-transform duration-500 group-hover:scale-110'
										/>

										{/* Duration Badge */}
										<div className='absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded'>
											{trailer.duration}
										</div>

										{/* Type Badge */}
										<div className='absolute top-2 left-2 bg-red-600/90 text-white text-xs px-2 py-1 rounded'>
											{trailer.type}
										</div>
									</div>

									<div className='p-2 flex  gap-2  items-center justify-between '>
										<h3 className='font-semibold text-white text-sm group-hover:text-red-300 transition-colors line-clamp-2  w-[85%]'>
											{trailer.title}
										</h3>

										<Dialog>
											<DialogTrigger>
												<Image
													src={youtubeLogo}
													alt='icon'
													width={40}
													height={40}
													className='cursor-pointer'
												/>
											</DialogTrigger>
											<DialogContent className='px-0 pt-4 bg-gray-900 border-white/10 hover:bg-gray-800 transition-all duration-500 '>
												<DialogHeader className='p-0 m-0'>
													<DialogTitle className='text-white pl-2 pr-8'>
														{trailer.title}
													</DialogTitle>
													<DialogDescription>
														<CardContent className='m-0 p-0 mt-4 rounded-none'>
															<iframe
																src={`https://www.youtube.com/embed/${trailer.key}`}
																allowFullScreen
																className={
																	"min-h-[260px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[360px]"
																}
																height={"auto"}
																width={"100%"}
															/>
														</CardContent>
													</DialogDescription>
												</DialogHeader>
											</DialogContent>
										</Dialog>
									</div>
								</CardContent>
							</Card>
						))}
				</div>
			</div>
			{!isClicked && trailers.length > 8 && (
				<div className='flex items-center justify-center  mt-20'>
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
		</section>
	);
}
