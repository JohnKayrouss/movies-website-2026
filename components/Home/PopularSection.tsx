import { ScrollReveal } from "./scroll-reveal";
import { Flame } from "lucide-react";
import { Movie } from "@/types/types";
import MovieSectionWrapper from "../reusable/MovieSectionWrapper";
import HomeSectionHeader from "../reusable/HomeSectionHeader";
import UnderLineDots from "../reusable/UnderLineDots";
import SeeMoreBtn from "../reusable/SeeMoreBtn";

export default function PopularSection({
	popularMovies = [],
}: {
	popularMovies?: Movie[];
}) {
	const sortedList = popularMovies.sort((a, b) => b.popularity - a.popularity);
	return (
		<div>
			<section className='relative py-20 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-orange-900/20 to-red-900/30 transform neg-skew-y-1 origin-top-left' />

				{/* Vintage Cinema Lights */}

				<UnderLineDots numberOfDots={3} className='sm:hidden' />
				<UnderLineDots numberOfDots={4} className='hidden sm:flex md:hidden' />
				<UnderLineDots numberOfDots={5} className='hidden md:flex ' />

				{/* Content */}

				<div className='container mx-auto px-4 md:px-6 relative z-10 pt-12'>
					<HomeSectionHeader
						title='Popular Movies'
						className=''
						IconComponent={
							<Flame className='w-5 h-5  sm:w-6 sm:h-6 md:w-8 md:h-8 text-white' />
						}
					/>
					<MovieSectionWrapper movieList={sortedList} />

					<ScrollReveal direction='up' delay={50}>
						<div className='flex justify-center mt-12'>
							<SeeMoreBtn
								url='/movies/collections/popular-movies'
								btnText='See More'
								className='bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-600/25'
							/>
						</div>
					</ScrollReveal>
				</div>
			</section>
		</div>
	);
}
