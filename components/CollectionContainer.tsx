export default function CollectionContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden'>
			<div className='absolute inset-0'>
				<div className="absolute inset-0 bg-[url('/images/film-grain.png')] opacity-10 mix-blend-overlay" />
				<div className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-pulse'></div>
				<div className='absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-bounce delay-100'></div>
				<div className='absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl animate-ping delay-100'></div>
				<div className='absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse delay-100'></div>
				<div className='absolute top-1/4 left-1/2 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-100'></div>
				<div className='absolute top-3/4 left-1/4 w-1 h-1 bg-orange-500/50 rounded-full animate-ping delay-100'></div>
				<div className='absolute top-1/2 right-1/4 w-3 h-3 bg-purple-500/30 rounded-full animate-pulse delay-100'></div>
				<div className='absolute top-16 right-1/2 w-6 h-6 bg-gradient-to-r from-pink-500/30 to-red-500/30 rounded-full blur-lg animate-bounce delay-100'></div>
				<div className='absolute bottom-40 left-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500/30 to-blue-500/30 rounded-full blur-md animate-ping delay-100'></div>
				<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent'></div>
			</div>
			<div className='relative z-10 pt-32 pb-20'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='relative'>{children}</div>
				</div>
			</div>
		</div>
	);
}
