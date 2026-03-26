import { ScrollReveal } from "./scroll-reveal";
import { Film } from "lucide-react";
import { Movie } from "@/types/types";
import { ParallaxSection } from "./parallax-section";
import SeeMoreBtn from "../reusable/SeeMoreBtn";
import MovieSectionWrapper from "../reusable/MovieSectionWrapper";
import HomeSectionHeader from "../reusable/HomeSectionHeader";

export default function TopRatedSection({
	topRatedMovies = [],
}: {
	topRatedMovies?: Movie[];
}) {
	return (
		<ScrollReveal
			direction='fade'
			delay={0}
			className='  bg-gradient-to-br from-sepia-900/30  to-amber-500/20'>
			<section className='relative py-20 overflow-hidden'>
				<ParallaxSection speed={-0.2}>
					<div className='absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30' />
				</ParallaxSection>

				<div className='container mx-auto px-4 md:px-6 relative z-10'>
					<HomeSectionHeader
						title='Top rated movies'
						className='bg-gradient-to-r from-amber-600 to-yellow-600  '
						IconComponent={
							<Film className='w-5 h-5  sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' />
						}
					/>

					<MovieSectionWrapper
						movieList={topRatedMovies.sort(
							(a, b) => b.vote_average - a.vote_average
						)}
					/>

					<ScrollReveal direction='down' delay={100}>
						<div className='flex justify-center mt-12'>
							<SeeMoreBtn
								url='/movies/collections/top-rated-movies'
								className='bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-600/25'
							/>
						</div>
					</ScrollReveal>
				</div>
			</section>
		</ScrollReveal>
	);
}
