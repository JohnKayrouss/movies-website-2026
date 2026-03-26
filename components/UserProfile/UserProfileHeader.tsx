import { User } from "lucide-react";
import { MovieTheaterTransition } from "../Home/movie-theater-transition";
import { ParallaxSection } from "../Home/parallax-section";
import { ScrollReveal } from "../Home/scroll-reveal";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { currentUser } from "@clerk/nextjs/server";

export default async function UserProfileHeader() {
	const user = await currentUser();
	if (!user?.id) return null;

	return (
		<MovieTheaterTransition>
			<section className='relative pt-36 pb-12 overflow-hidden'>
				<ParallaxSection speed={-0.2}>
					<div className='absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30' />
				</ParallaxSection>

				<div className='container mx-auto px-4 md:px-6 relative z-10'>
					<ScrollReveal direction='fade' delay={100}>
						<div className='text-center mb-12'>
							{user?.imageUrl ? (
								<Avatar className='w-20 h-20 inline-flex items-center justify-center rounded-full mb-6'>
									<AvatarImage src={user?.imageUrl} />
									<AvatarFallback>{user?.fullName?.charAt(0)}</AvatarFallback>
								</Avatar>
							) : (
								<div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6'>
									<User className='w-12 h-12 text-white' />
								</div>
							)}

							<h1 className='text-4xl md:text-4xl font-bold text-white mb-4'>
								{user?.fullName
									? user?.fullName
									: user?.emailAddresses[0]?.emailAddress}
							</h1>
							<p className='text-xl text-gray-500'>
								Manage your favorites and watchlist
							</p>
						</div>
					</ScrollReveal>
				</div>
			</section>
		</MovieTheaterTransition>
	);
}
