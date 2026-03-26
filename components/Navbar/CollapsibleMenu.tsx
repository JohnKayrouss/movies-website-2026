import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserIcon from "./UserIcon";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { AlignLeft } from "lucide-react";

export default function CollapsibleMenu({ user }: { user: User | null }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='lg'
					className=' backdrop-blur-sm border border-white/20 text-white/90 hover:bg-white/10 hover:text-white hover:border-primary/50 transition-all duration-300 rounded-full p-1 items-center justify-center gap-4'>
					<>
						<AlignLeft className='w-8 h-8' size={20} />
						<UserIcon user={user} />
					</>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-56 bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/50 rounded-xl p-2'
				align='end'>
				{/* Animated background particles */}
				<div className='absolute inset-0 overflow-hidden pointer-events-none rounded-xl'>
					<div
						className='absolute top-2 left-4 w-1 h-1 bg-primary/40 rounded-full animate-ping'
						style={{ animationDelay: "0s" }}
					/>
					<div
						className='absolute bottom-3 right-6 w-0.5 h-0.5 bg-yellow-400/30 rounded-full animate-pulse'
						style={{ animationDelay: "1s" }}
					/>
				</div>

				<DropdownMenuLabel className='text-white/90 font-semibold'>
					Menu
				</DropdownMenuLabel>
				<DropdownMenuSeparator className='bg-white/10' />
				<DropdownMenuGroup>
					<Link href='/movies/collections/now-playing-movies'>
						<DropdownMenuItem className='text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white rounded-lg px-3 py-2 cursor-pointer transition-all duration-300'>
							Now Playing
						</DropdownMenuItem>
					</Link>
					<Link href='/movies/collections/popular-movies'>
						<DropdownMenuItem className='text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white rounded-lg px-3 py-2 cursor-pointer transition-all duration-300'>
							Popular Movies
						</DropdownMenuItem>
					</Link>
					<Link href='/movies/collections/top-rated-movies'>
						<DropdownMenuItem className='text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white rounded-lg px-3 py-2 cursor-pointer transition-all duration-300'>
							Top Rated
						</DropdownMenuItem>
					</Link>
					<Link href='/movies/collections/upcoming-movies'>
						<DropdownMenuItem className='text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white rounded-lg px-3 py-2 cursor-pointer transition-all duration-300'>
							Upcoming
						</DropdownMenuItem>
					</Link>
				</DropdownMenuGroup>
				<DropdownMenuSeparator className='bg-white/10' />
				<DropdownMenuGroup>
					<Link href='/movies/genres'>
						<DropdownMenuItem className='text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white rounded-lg px-3 py-2 cursor-pointer transition-all duration-300'>
							Genres
						</DropdownMenuItem>
					</Link>
				</DropdownMenuGroup>
				<DropdownMenuSeparator className='bg-white/10' />
				<DropdownMenuGroup>
					<Link href='/recently-visited'>
						<DropdownMenuItem className='text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white rounded-lg px-3 py-2 cursor-pointer transition-all duration-300'>
							Recently Visited
						</DropdownMenuItem>
					</Link>

					{user ? (
						<>
							<Link href={`/user-profile/${user.id}/favorites`}>
								<DropdownMenuItem className='text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white rounded-lg px-3 py-2 cursor-pointer transition-all duration-300'>
									Profile
								</DropdownMenuItem>
							</Link>
							<Link href={`/user-profile/${user.id}/favorites`}>
								<DropdownMenuItem className='text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white rounded-lg px-3 py-2 cursor-pointer transition-all duration-300'>
									Favorites
								</DropdownMenuItem>
							</Link>
							<Link href={`/user-profile/${user.id}/watchlist`}>
								<DropdownMenuItem className='text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white rounded-lg px-3 py-2 cursor-pointer transition-all duration-300'>
									Watchlist
								</DropdownMenuItem>
							</Link>
						</>
					) : (
						<DropdownMenuItem className=' rounded-lg px-3 py-2'>
							<SignInButton mode='modal'>Sign in</SignInButton>
						</DropdownMenuItem>
					)}
				</DropdownMenuGroup>

				{user && (
					<>
						<DropdownMenuSeparator className='bg-white/10' />
						<DropdownMenuItem className='text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white rounded-lg px-3 py-2 cursor-pointer transition-all duration-300'>
							<SignOutButton>
								<span>Sign Out</span>
							</SignOutButton>
						</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
