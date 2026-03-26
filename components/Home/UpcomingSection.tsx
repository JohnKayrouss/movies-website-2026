import React from "react";
import { ScrollReveal } from "./scroll-reveal";
import { Crown } from "lucide-react";
import { Movie } from "@/types/types";
import { ParallaxSection } from "./parallax-section";
import SeeMoreBtn from "../reusable/SeeMoreBtn";
import MovieSectionWrapper from "../reusable/MovieSectionWrapper";
import HomeSectionHeader from "../reusable/HomeSectionHeader";

export default function UpcomingSection({
	upcomingMovies = [],
}: {
	upcomingMovies?: Movie[];
}) {
	const sortedList = upcomingMovies.sort(
		(a, b) =>
			new Date(a.release_date).getTime() - new Date(b.release_date).getTime(),
	);
	return (
		<ScrollReveal direction='fade' delay={0}>
			<section className='relative py-20 overflow-hidden  '>
				<ParallaxSection speed={-0.2}>
					<div className='absolute inset-0 bg-linear-to-r from-purple-900/30 to-blue-900/30' />
				</ParallaxSection>

				<div className='container mx-auto px-4 md:px-6 relative z-10'>
					<HomeSectionHeader
						isAnimated={true}
						title='Upcoming Movies'
						className='bg-linear-to-r from-purple-500 to-blue-600 '
						IconComponent={
							<Crown className='w-5 h-5  sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' />
						}
					/>

					<MovieSectionWrapper movieList={sortedList} />

					<ScrollReveal direction='down' delay={100}>
						<div className='flex justify-center mt-12'>
							<SeeMoreBtn
								url='/movies/collections/upcoming-movies'
								className="className='bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/25"
							/>
						</div>
					</ScrollReveal>
				</div>
			</section>
		</ScrollReveal>
	);
}
