const BASE_URL = "https://moviesapi.codingfront.dev/api/v1";

export const getGenres = async () => {
  const res = await fetch(`${BASE_URL}/genres`);
  return res.json();
};

export const searchMovies = async ({ query, page }) => {
  const res = await fetch(`${BASE_URL}/movies?q=${query}&page=${page}`);
  return res.json();
};

export const moviesByGenre = async ({ genre, page }) => {
  const res = await fetch(`${BASE_URL}/genres/${genre}/movies?page=${page}`);
  return res.json();
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/movies/${id}`);
  return res.json();
};
