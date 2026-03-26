import SingleMovieBackground from "./SingleMovieBackground";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Star, Clock, Calendar } from "lucide-react";
import FavoriteSignInButton from "../reusable/FavoriteSignInButton";
import FavoriteToggleButton from "../form/FavoriteToggleButton";
import WatchListSignInButton from "../reusable/WatchListSignInButton";
import WatchListToggleButton from "../form/WatchListToggleButton";
// import { Dispatch, SetStateAction } from "react";

interface MovieDetails {
	id: string;
	title: string;
	year: number;
	rating: string;
	userScore: string;
	duration: string;
	genre: string[];
	director: string;
	cast: string[];
	synopsis: string;
	poster: string;
	backdrop: string;
	movieBackdropPath: string;
	// isLoaded: boolean;
}

interface SingleMovieHeroSectionProps {
	movie: MovieDetails;
	moviePosterPath: string;
	vote_count: number;
	userId: string | null;
	isLiked: boolean;
	isInWatchlist: boolean;
}

export default function SingleMovieHeroSection({
	movie,
	userId,
	moviePosterPath,
	vote_count,
	isLiked,
	isInWatchlist,
}: SingleMovieHeroSectionProps) {
	const { title, movieBackdropPath } = movie;
	return (
		<div className='relative min-h-screen overflow-hidden '>
			<SingleMovieBackground
				movieBackdropPath={movieBackdropPath}
				title={title}
			/>
			<div className='relative z-10 flex min-h-screen items-center pt-16 pb-8 sm:pt-20'>
				<div className='container mx-auto px-4 sm:px-6'>
					<div className='grid gap-6 sm:gap-8 lg:grid-cols-[400px_1fr] lg:gap-12'>
						{/* Movie Poster with Enhanced Hover Effects */}
						<div className='flex justify-center lg:justify-start order-1 lg:order-1'>
							<div className='group relative'>
								{/* Glowing Border Animation */}
								<div className='absolute -inset-1 sm:-inset-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100 animate-gradient-x' />

								{/* Poster Image */}
								<div className='relative overflow-hidden rounded-xl sm:rounded-2xl'>
									<Image
										src={moviePosterPath || "/placeholder.svg"}
										alt={movie.title}
										width={400}
										height={600}
										className={`relative rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-700 group-hover:scale-105 translate-y-0 opacity-100 w-[280px] h-[420px] sm:w-[320px] sm:h-[480px] md:w-[360px] md:h-[540px] lg:w-[400px] lg:h-[600px] object-cover`}
										style={{ transitionDelay: "0.2s" }}
									/>

									{/* Shimmer Effect */}
									<div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent' />
								</div>
							</div>
						</div>

						{/* Movie Info with Staggered Animations */}
						<div className='flex flex-col justify-center space-y-4 sm:space-y-6 order-2 lg:order-2'>
							<div className='space-y-3 sm:space-y-4'>
								{/* Genre Badges */}
								<div className='flex flex-wrap gap-1.5 sm:gap-2'>
									{movie.genre.map((g, index) => (
										<Badge
											key={g}
											variant='secondary'
											className={`bg-white/10 text-white hover:bg-white/20 transition-all duration-500 hover:scale-110 text-xs sm:text-sm px-2 py-1
												translate-y-0 opacity-100 `}
											style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
											{g}
										</Badge>
									))}
								</div>

								{/* Title with Typewriter Effect */}
								<h1
									className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight transition-all duration-1000 translate-x-0 opacity-100 leading-tight`}
									style={{ transitionDelay: "0.4s" }}>
									{movie.title}
								</h1>

								{/* Movie Stats with User Score Circle */}
								<div
									className={`flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg text-gray-300 transition-all duration-1000 translate-y-0 opacity-100 `}
									style={{ transitionDelay: "0.6s" }}>
									<div className='flex items-center gap-1 hover:text-white transition-colors'>
										<Calendar className='h-4 w-4 sm:h-5 sm:w-5' />
										<span className='text-sm sm:text-base'>{movie.year}</span>
									</div>
									<div className='flex items-center gap-1 hover:text-white transition-colors'>
										<Clock className='h-4 w-4 sm:h-5 sm:w-5' />
										<span className='text-sm sm:text-base'>
											{movie.duration}
										</span>
									</div>
									<div className='flex items-center gap-1 hover:text-yellow-400 transition-colors'>
										<Star className='h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400' />
										<span className='text-sm sm:text-base'>{movie.rating}</span>
									</div>

									{/* User Score Circle */}
									<div className='flex items-center gap-2 sm:gap-3'>
										<div className='relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16'>
											<svg
												className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transform -rotate-90'
												viewBox='0 0 36 36'>
												{/* Background circle */}
												<path
													className='text-gray-700'
													stroke='currentColor'
													strokeWidth='3'
													fill='transparent'
													d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
												/>
												{/* Progress circle */}
												<path
													className={`transition-all duration-2000 ease-out ${
														Number(movie.userScore) >= 75
															? "text-green-500"
															: Number(movie.userScore) >= 50
															? "text-yellow-500"
															: "text-red-500"
													}`}
													stroke='currentColor'
													strokeWidth='3'
													strokeLinecap='round'
													fill='transparent'
													strokeDasharray={`${movie.userScore}, 100`}
													strokeDashoffset='0'
													d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
													style={
														{
															strokeDasharray: "0, 100",
															animation: `fillCircle 3s ease-in-out .5s forwards`,
															"--final-score": `${movie.userScore}`,
														} as React.CSSProperties
													}
												/>
											</svg>
											<div className='absolute inset-0 flex items-center justify-center'>
												<span className='text-xs sm:text-sm font-bold text-white'>
													{movie.userScore}%
												</span>
											</div>
										</div>
										<div className='text-xs sm:text-sm'>
											<div className='font-semibold text-white'>User Score</div>
											<div className='text-gray-400'>({vote_count} votes)</div>
										</div>
									</div>
								</div>
							</div>

							{/* Synopsis */}
							<p
								className={`text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-2xl transition-all duration-1000 translate-y-0 opacity-100`}
								style={{ transitionDelay: "0.8s" }}>
								{movie.synopsis}
							</p>

							{/* Director and Cast */}
							<div
								className={`space-y-2 sm:space-y-3 transition-all duration-1000 translate-y-0 opacity-100 `}
								style={{ transitionDelay: "1s" }}>
								<div>
									<span className='text-xs sm:text-sm font-semibold text-gray-400'>
										DIRECTED BY
									</span>
									<p className='text-sm sm:text-base md:text-lg hover:text-white transition-colors'>
										{movie.director}
									</p>
								</div>
								<div>
									<span className='text-xs sm:text-sm font-semibold text-gray-400'>
										STARRING
									</span>
									<p className='text-sm sm:text-base md:text-lg hover:text-white transition-colors leading-relaxed'>
										{movie.cast.join(", ")}
									</p>
								</div>
							</div>

							{/* Action Buttons with Bounce Animation */}
							<div
								className={`flex flex-wrap gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4 transition-all duration-1000 translate-y-0 opacity-100 `}
								style={{ transitionDelay: "1.2s" }}>
								{!userId && (
									<>
										<WatchListSignInButton />
										<FavoriteSignInButton />
									</>
								)}
								{userId && (
									<>
										<WatchListToggleButton
											isInWatchlist={isInWatchlist}
											movieId={movie.id}
											userId={userId}
											movieTitle={movie.title}
											moviePosterPath={movie.poster}
											movieRating={movie.rating}
											movieReleaseDate={movie.year.toString()}
										/>
										<FavoriteToggleButton
											isLiked={isLiked}
											movieId={movie.id}
											userId={userId}
											movieTitle={movie.title}
											moviePosterPath={movie.poster}
											movieRating={movie.rating}
											movieReleaseDate={movie.year.toString()}
										/>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
