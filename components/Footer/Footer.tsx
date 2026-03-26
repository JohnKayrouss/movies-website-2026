import React from "react";
import Link from "next/link";
import { BriefcaseBusiness, Linkedin, Facebook, Github } from "lucide-react";
import FooterBackground from "./FooterBackground";
import { currentUser } from "@clerk/nextjs/server";

export default async function Footer() {
	const user = await currentUser();
	const categories = [
		{
			label: "Now Playing",
			link: "/movies/collections/now-playing-movies",
		},

		{
			label: "Upcoming",
			link: "/movies/collections/upcoming-movies",
		},
		{
			label: "Popular",
			link: "/movies/collections/popular-movies",
		},

		{
			label: "Top Rated",
			link: "/movies/collections/top-rated-movies",
		},
	];
	const developer = [
		{
			label: "Eng. John Kayrous",
			link: "https://portfolio.johnkayrous.com",
			icon: (
				<BriefcaseBusiness
					size={16}
					className='group-hover:rotate-360 transition-transform duration-300 text-primary'
				/>
			),
		},

		{
			label: "LinkedIn",
			link: "https://www.linkedin.com/in/john-kayrous-64792b235",
			icon: (
				<Linkedin
					size={16}
					className='group-hover:rotate-360 transition-transform duration-300 text-primary'
				/>
			),
		},
		{
			label: "GitHub",
			link: "https://github.com/JohnKayrouss",
			icon: (
				<Github
					size={16}
					className='group-hover:rotate-360 transition-transform duration-300 text-primary'
				/>
			),
		},

		{
			label: "Facebook",
			link: "https://www.facebook.com/john.kayrous",
			icon: (
				<Facebook
					size={16}
					className='group-hover:rotate-360 transition-transform duration-300 text-primary'
				/>
			),
		},
	];
	const userFeatures = [
		{
			label: "Recently Visited",
			link: "/recently-visited",
		},

		{
			label: "Profile",
			link: user ? `/user-profile/${user?.id}/favorites` : "/",
		},

		{
			label: "Favorites",
			link: user ? `/user-profile/${user?.id}/favorites` : "/",
		},
		{
			label: "Watchlist",
			link: user ? `/user-profile/${user?.id}/watchlist` : "/",
		},
	];
	return (
		<footer className='backdrop-blur-xl pt-20 relative overflow-hidden bg-black text-white'>
			<FooterBackground />
			<div className='container mx-auto px-4 py-12 relative z-10 max-w-7xl'>
				<div className='flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-8 mb-8 px-4'>
					<div className='space-y-4'>
						<h3 className='text-xl font-bold bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent mb-4'>
							Movie Categories
						</h3>
						<div className='space-y-3 flex flex-col justify-center items-center md:items-start'>
							{categories.map((item, idx) => (
								<Link key={idx} href={item.link} className='block group'>
									<span className='text-white/80 hover:text-white transition-all duration-300 relative group-hover:translate-x-1 py-[2px]'>
										{item.label}
										<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-300 ' />
									</span>
								</Link>
							))}
						</div>
					</div>

					{/* Column 2 - User Features */}
					<div className='space-y-4 '>
						<h3 className='text-xl font-bold bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent mb-4 '>
							User Features
						</h3>
						<div className='space-y-3 flex flex-col justify-center items-center md:items-start'>
							{userFeatures.map((item, idx) => (
								<Link key={idx} href={item.link} className='block group'>
									<span className='text-white/80 hover:text-white transition-all duration-300 relative group-hover:translate-x-1 py-[2px]'>
										{item.label}
										<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-300 ' />
									</span>
								</Link>
							))}
						</div>
					</div>

					{/* Column 3 - Developer Links */}
					<div className='space-y-4 flex flex-col  items-center md:items-start'>
						<h3 className='text-xl font-bold bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent mb-4'>
							Developer
						</h3>
						<div className='space-y-3 flex flex-col justify-center items-center md:items-start'>
							{developer.map((item, idx) => (
								<a
									key={idx}
									href={item.link}
									target='_blank'
									rel='noopener noreferrer'
									className='block group'>
									<span className='text-white/80 hover:text-white transition-all duration-300 relative group-hover:translate-x-1 py-[0px] flex items-center gap-2 w-fit'>
										{item.icon}
										{item.label}
										<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-300 ' />
									</span>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Section - Copyright */}
				<div className='border-t border-white/10 pt-8'>
					<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
						<div className='text-white/60 text-sm'>
							© 2024 Theatrist. All rights reserved.
						</div>
						<div className='text-white/60 text-sm'>
							Developed by{" "}
							<a
								href='https://portfolio.johnkayrous.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-primary hover:text-yellow-400 transition-colors duration-300 font-medium hover:underline'>
								John Kayrous
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Subtle gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none' />
		</footer>
	);
}
