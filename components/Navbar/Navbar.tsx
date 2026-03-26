import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { User } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import SearchMovie from "./SearchMovie";
import CategoriesDropdown from "./CategoriesDropdown";
import NavbarAnimatedbackground from "./NavbarAnimatedbackground";
import Logo from "./Logo";
import CollapsibleMenu from "./CollapsibleMenu";

export default async function Navbar() {
	const user = await currentUser();
	return (
		<nav className='fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl py-2 shadow-lg shadow-black/50'>
			<NavbarAnimatedbackground />
			<div className='flex container mx-auto px-4 py-4  items-center justify-between gap-4 relative '>
				<div className='flex items-center gap-8'>
					<Logo />
					<div className='hidden lg:flex items-center gap-6'>
						<CategoriesDropdown />

						<Link href='/movies/genres' className='hidden xl:block'>
							<div className='relative group'>
								<span className='text-white/80 hover:text-white font-medium transition-all duration-300 cursor-pointer relative px-3 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm'>
									Genres
									<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-300' />
								</span>
							</div>
						</Link>

						<Link href='/recently-visited' className='hidden xl:block'>
							<div className='relative group'>
								<span className='text-white/80 hover:text-white font-medium transition-all duration-300 cursor-pointer relative px-3 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm'>
									Recently Visited
									<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-300' />
								</span>
							</div>
						</Link>
						{user && (
							<Link
								href={`/user-profile/${user?.id}/favorites`}
								className='hidden lg:block'>
								<div className='relative group'>
									<span className='text-white/80 hover:text-white font-medium transition-all duration-300 cursor-pointer relative px-3 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm'>
										Profile
										<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-300' />
									</span>
								</div>
							</Link>
						)}
						{!user && (
							<SignInButton mode='modal'>
								<div className='relative group'>
									<span className='text-white/80 hover:text-white font-medium transition-all duration-300 cursor-pointer relative px-3 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm'>
										Profile
										<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-300' />
									</span>
								</div>
							</SignInButton>
						)}
					</div>
				</div>

				{/* Center Section - Search */}
				<div className='hidden md:flex md:flex-1 max-w-md mx-4'>
					<SearchMovie />
				</div>

				{/* Right Section - User Actions */}
				<div className='hidden lg:flex items-center gap-4'>
					{!user && (
						<SignInButton mode='modal'>
							<div className='relative group cursor-pointer'>
								<Button className='bg-gradient-to-r from-primary via-primary/80 to-primary hover:from-primary/90 hover:via-primary hover:to-primary/90 text-white px-6 py-3 text-base font-semibold transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 rounded-full border border-primary/20 relative overflow-hidden'>
									<div className='flex items-center gap-2'>
										<User
											size={18}
											className='transition-transform duration-300 group-hover:rotate-12'
										/>
										<span>Sign In</span>
									</div>
									{/* Shimmer effect */}
									<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
								</Button>
							</div>
						</SignInButton>
					)}
					{user && (
						<>
							{/* User Status */}
							<div className='hidden xl:flex items-center gap-2'>
								<span className='text-white/90 text-sm font-medium'>
									Welcome back
								</span>
								<span className='text-primary text-sm'>
									{user.emailAddresses[0]?.emailAddress}
								</span>
							</div>

							{/* Sign Out Button */}
							<button className='hidden xl:flex text-white/80 px-4 py-2 text-sm rounded-full border border-white/10 hover:text-primary cursor-pointer'>
								<SignOutButton>Sign Out</SignOutButton>
							</button>
						</>
					)}
				</div>
				<div className='xl:hidden'>
					<CollapsibleMenu user={user} />
				</div>
			</div>
		</nav>
	);
}
