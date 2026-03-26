import React from "react";

interface CollectionHeaderProps {
	header: string;
	subHeader: string;
}

export default function CollectionHeader({
	header,
	subHeader,
}: CollectionHeaderProps) {
	return (
		<div className='relative my-8 py-6'>
			<div className='relative z-10'>
				{/* Main Header */}
				<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]'>
					{header}
				</h1>

				{/* Animated underline */}
				<div className='h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mb-4 w-0 animate-[expandWidth_1.2s_ease-in-out_0.6s_forwards]'></div>

				{/* Sub Header */}
				{subHeader && (
					<p className='text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed opacity-0 animate-[fadeInUpDelayed_1s_ease-out_0.8s_forwards]'>
						{subHeader}
					</p>
				)}

				{/* Subtle accent dots */}
				<div className='absolute -top-1 -left-1 w-1 h-1 bg-orange-500 rounded-full opacity-60'></div>
				<div className='absolute top-6 -right-1 w-0.5 h-0.5 bg-red-500 rounded-full opacity-40'></div>
			</div>
		</div>
	);
}
