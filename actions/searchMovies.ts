"use server";

export const searchMovies = async (searchTerm: string) => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTZiNzg5ZmU4NzgzOTI0MGY5YzdjZGExZjEwZWFjZSIsIm5iZiI6MTc1MzkxNjU1OS4zMTcsInN1YiI6IjY4OGFhNDhmMDQyZDAzZTUyZjg0YzFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.whnTZxWsSwzJiUqxIyP21kx9SFsFmRXemQTXaPGkQxQ",
		},
	};
	const response = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`,
		options
	);
	const data = await response.json();
	return data;
};
