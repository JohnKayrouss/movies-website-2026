// import { CastMember, CrewMember } from "@/types/types";

interface MovieProps {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
const genres = {
	28: "Action",
	12: "Adventure",
	16: "Animation",
	35: "Comedy",
	80: "Crime",
	99: "Documentary",
	18: "Drama",
	10751: "Family",
	14: "Fantasy",
	36: "History",
	27: "Horror",
	10402: "Music",
	9648: "Mystery",
	10749: "Romance",
	878: "Science Fiction",
	10770: "TV Movie",
	53: "Thriller",
	10752: "War",
	37: "Western",
};

export const randomBackdrop = (movie: MovieProps[]) => {
	const randomPoster = movie[Math.floor(Math.random() * movie.length)];
	const unique = Date.now() + Math.random(); // unique value per render
	return `https://image.tmdb.org/t/p/w500/${randomPoster.backdrop_path}?v=${unique}`;
};

export const getMoviePosterPath = (poster_path: string) => {
	return `https://image.tmdb.org/t/p/w500/${poster_path}`;
};

export const getActorImage = (profile_path: string) => {
	return `https://image.tmdb.org/t/p/w500/${profile_path}`;
};

export const getMovieBackdropPath = (backdrop_path: string) => {
	return `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
};
export const getMovieReleaseDate_year_month = (movie: MovieProps) => {
	const date = new Date(movie.release_date);
	const year = date.getFullYear();
	const month = date.toLocaleString("default", { month: "long" });
	return `${month} ${year}`;
};

export const getRating = (rate: number) => {
	return rate.toFixed(1);
};

export const getOnlyTwoMovieGenres = (movieGenres: number[]) => {
	const genreNames: string[] = [];
	// loop over the movie genres
	movieGenres.slice(0, 2).forEach((id) => {
		if (id in genres) {
			genreNames.push(genres[id as keyof typeof genres]);
		}
	});
	return genreNames;
};

export const getAllMovieGenres = (
	movieGenres: { id: number; name: string }[]
) => {
	const genres = [];
	for (const genre of movieGenres) {
		genres.push(genre.name);
	}
	return genres;
};
