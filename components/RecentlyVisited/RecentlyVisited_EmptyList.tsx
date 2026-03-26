import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

export default function RecentlyVisited_EmptyList() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black pt-32'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='flex items-center gap-4 mb-8'>
					<Link
						href='/'
						className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'>
						<ArrowLeft className='w-5 h-5' />
						Back to Home
					</Link>
				</div>

				<div className='text-center py-20'>
					<Clock className='w-16 h-16 text-gray-600 mx-auto mb-4' />
					<h1 className='text-3xl font-bold text-white mb-2'>
						No Recently Visited Movies
					</h1>
					<p className='text-gray-400 mb-8'>
						Start exploring movies to see them appear here
					</p>
					<Link
						href='/'
						className='inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors'>
						Explore Movies
					</Link>
				</div>
			</div>
		</div>
	);
}
