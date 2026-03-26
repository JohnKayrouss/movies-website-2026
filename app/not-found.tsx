import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, Film } from "lucide-react";

export default function NotFound() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center px-4'>
			<div className='text-center space-y-12 max-w-4xl mx-auto'>
				<div className='relative'>
					<div className='text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 animate-pulse'>
						404
					</div>
					<div className='absolute -top-4 -right-4'>
						<Film className='w-20 h-20 text-orange-500 animate-bounce' />
					</div>
				</div>

				<div className='space-y-6'>
					<h1 className='text-6xl font-bold text-white'>
						Oops! Page Not Found
					</h1>
					<p className='text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
						The page you&apos;re looking for seems to have left the theater
						early. Don&apos;t worry, there are plenty of other great films
						waiting for you!
					</p>
				</div>

				<div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
					<Link href='/'>
						<Button
							size='lg'
							className='bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-4 rounded-xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'>
							<Home className='w-6 h-6 mr-3' />
							Back to Home
						</Button>
					</Link>

					<Link href='/movies/search'>
						<Button
							variant='outline'
							size='lg'
							className='border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-12 py-4 rounded-xl text-xl font-semibold transition-all duration-300 shadow-lg'>
							<Search className='w-6 h-6 mr-3' />
							Search Movies
						</Button>
					</Link>
				</div>

				{/* Popular Links */}
				<div className='pt-12 border-t border-gray-700'>
					<p className='text-xl text-gray-400 mb-6'>
						Or explore these popular sections:
					</p>
					<div className='flex flex-wrap justify-center gap-6 text-lg'>
						<Link
							href='/movies/collections/popular-movies'
							className='text-orange-400 hover:text-orange-300 transition-colors duration-300 font-medium'>
							⭐ Popular Movies
						</Link>
						<span className='text-gray-600 text-xl'>•</span>
						<Link
							href='/movies/collections/top-rated-movies'
							className='text-orange-400 hover:text-orange-300 transition-colors duration-300 font-medium'>
							🏆 Top Rated
						</Link>
						<span className='text-gray-600 text-xl'>•</span>
						<Link
							href='/movies/collections/now-playing-movies'
							className='text-orange-400 hover:text-orange-300 transition-colors duration-300 font-medium'>
							🎬 Now Playing
						</Link>
						<span className='text-gray-600 text-xl'>•</span>
						<Link
							href='/movies/genres'
							className='text-orange-400 hover:text-orange-300 transition-colors duration-300 font-medium'>
							🎭 Browse Genres
						</Link>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className='absolute top-10 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse'></div>
				<div className='absolute bottom-10 right-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse delay-1000'></div>
			</div>
		</div>
	);
}
