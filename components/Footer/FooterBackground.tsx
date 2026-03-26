export default function FooterBackground() {
	return (
		<div className='absolute inset-0 overflow-hidden pointer-events-none '>
			<div
				className='absolute top-4 left-8 w-1 h-1 bg-primary/40 rounded-full animate-ping'
				style={{ animationDelay: "0s" }}
			/>
			<div
				className='absolute top-8 right-12 w-0.5 h-0.5 bg-yellow-400/30 rounded-full animate-pulse'
				style={{ animationDelay: "1s" }}
			/>
			<div
				className='absolute bottom-6 left-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-ping'
				style={{ animationDelay: "2s" }}
			/>
			<div
				className='absolute bottom-4 right-1/3 w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse'
				style={{ animationDelay: "3s" }}
			/>
		</div>
	);
}
