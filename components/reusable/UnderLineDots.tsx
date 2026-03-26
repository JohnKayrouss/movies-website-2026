import { cn } from "@/lib/utils";

export default function UnderLineDots({
	numberOfDots,
	className,
}: {
	numberOfDots: number;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"absolute top-0 left-0 right-0 flex justify-center",
				className
			)}>
			<div className='flex gap-8'>
				{[...Array(numberOfDots)].map((_, i) => (
					<div
						key={i}
						className='w-4 h-4 bg-yellow-400 rounded-full cinema-bulb'
						style={{ animationDelay: `${i * 0.2}s` }}
					/>
				))}
			</div>
		</div>
	);
}
