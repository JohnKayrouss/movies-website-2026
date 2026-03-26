import { ScrollReveal } from "../Home/scroll-reveal";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface HomeSectionHeaderProps {
	title: string;
	IconComponent?: React.ReactNode;
	className?: string;
	isAnimated?: boolean;
}
export default function HomeSectionHeader({
	title,
	IconComponent,
	className = "",
	isAnimated = false,
}: HomeSectionHeaderProps) {
	return (
		<ScrollReveal direction='right' delay={100}>
			<div className='flex items-center gap-3 mb-12'>
				<div
					className={cn(
						"p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl relative",
						className,
					)}>
					{/* <Flame className='w-5 h-5  sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' /> */}
					{IconComponent || (
						<Flame className='w-5 h-5  sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' />
					)}
					{isAnimated && (
						<div className='absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping' />
					)}
				</div>
				<h2 className='text-xl sm:text-2xl md:text-4xl font-bold text-white '>
					{title || "Movies"}
				</h2>
			</div>
		</ScrollReveal>
	);
}
