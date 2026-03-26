import React from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SeeMoreBtn({
	btnText = "See More",
	className,
	btnSize = "lg",
	url,
}: {
	btnText?: string;
	className?: string;
	btnSize?: "default" | "icon" | "lg" | "sm";
	url: string;
}) {
	return (
		<Link
			href={url}
			className={cn(
				buttonVariants({ variant: "default", size: btnSize }),
				"bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-600/25 cursor-pointer",
				className
			)}>
			{btnText}
		</Link>
	);
}
