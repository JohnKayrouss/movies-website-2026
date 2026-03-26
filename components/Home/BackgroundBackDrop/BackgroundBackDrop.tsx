import Image from "next/image";

interface BackgroundBackDropProps {
	src: string;
	alt?: string;
	isLoaded: boolean;
}
export default function BackgroundBackDrop({
	src,
	alt,
	isLoaded,
}: BackgroundBackDropProps) {
	return (
		<div className='absolute inset-0 h-[30rem] sm:h-[38rem] md:h-[46rem] lg:h-screen'>
			{/* Main Background */}
			<Image
				src={src || "/placeholder.svg"}
				key={src || "/placeholder.svg"}
				alt={alt || "Background Image"}
				fill
				className={`object-center md:object-cover transition-all duration-3000  ${
					isLoaded ? "opacity-60 scale-100" : "opacity-0 scale-110"
				}`}
				priority
			/>

			{/* Cinematic Vignette */}
			<div className='absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/80' />

			{/* Film Noir Lighting */}
			<div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/70' />
			<div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50' />

			{/* Dynamic Light Rays */}
			<div className='absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-200/30 to-transparent light-ray-1' />
			<div className='absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-blue-200/20 to-transparent light-ray-2' />

			{/* Cinematic Dust Particles */}
			<div className='absolute inset-0 overflow-hidden'>
				{[...Array(30)].map((_, i) => (
					<div
						key={i}
						className='absolute w-1 h-1 bg-white/30 rounded-full dust-float'
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 10}s`,
							animationDuration: `${5 + Math.random() * 10}s`,
						}}
					/>
				))}
			</div>
		</div>
	);
}
