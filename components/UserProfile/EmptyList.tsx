import { Clock } from "lucide-react";
import Link from "next/link";

export default function UserProfile_EmptyList({ header }: { header: string }) {
	return (
		<div className=' '>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center py-20'>
					<Clock className='w-16 h-16 text-gray-600 mx-auto mb-4' />
					<h1 className='text-3xl font-bold text-white mb-2'>{header}</h1>
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
