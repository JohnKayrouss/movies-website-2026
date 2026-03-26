export default function NavbarAnimatedbackground() {
	return (
		<div className='absolute inset-0 overflow-hidden pointer-events-none'>
			<div
				className='absolute top-0 left-0 w-2 h-2 bg-primary/30 rounded-full animate-ping'
				style={{ animationDelay: "0s" }}
			/>
			<div
				className='absolute top-2 right-20 w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse'
				style={{ animationDelay: "1s" }}
			/>
			<div
				className='absolute bottom-1 left-32 w-1.5 h-1.5 bg-primary/20 rounded-full animate-ping'
				style={{ animationDelay: "2s" }}
			/>
		</div>
	);
}
