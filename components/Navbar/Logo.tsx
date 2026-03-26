import Link from "next/link";

export default function Logo() {
	return (
		<Link href='/'>
			<div className='relative group cursor-pointer'>
				<h1 className='text-3xl md:text-4xl font-black bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent hover:from-yellow-400 hover:via-primary hover:to-yellow-400 transition-all duration-700 relative transform hover:scale-110'>
					Theatrist
					{/* Enhanced golden underline */}
					<div className='absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 via-primary to-yellow-400 group-hover:w-full transition-all duration-700 rounded-full shadow-lg shadow-yellow-400/50' />
					{/* Enhanced glow effect */}
					<div className='absolute inset-0 text-3xl md:text-4xl font-black text-yellow-400/30 blur-sm group-hover:text-yellow-400/60 transition-all duration-700 transform group-hover:scale-110 cursor-pointer'>
						Theatrist
					</div>
					{/* Sparkle effect */}
					<div className='absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500' />
				</h1>
			</div>
		</Link>
	);
}
