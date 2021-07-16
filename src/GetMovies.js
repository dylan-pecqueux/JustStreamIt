import { insertHeader, insertMovies } from './InsertMovies';
import { fetchMovies, fetchMovie } from './request';

export const getMoviesList = async (genre) => {
  const moviesP1 = await fetchMovies(`?genre=${genre}&sort_by=-imdb_score`);
  const moviesP2 = await fetchMovies(`?genre=${genre}&page=2&sort_by=-imdb_score`);
  const movies = moviesP1.concat(moviesP2);
  const firstSevenMovies = movies.slice(0, 7);
  insertMovies(firstSevenMovies, `.${genre}-movies`);
};

export const getBestMovies = async () => {
  const moviesP1 = await fetchMovies('?sort_by=-imdb_score');
  const moviesP2 = await fetchMovies('?page=2&sort_by=-imdb_score');
  const movies = moviesP1.concat(moviesP2);
  const movieInfo = await fetchMovie(movies[0].url);
  insertHeader(movieInfo);
  const firstSevenMovies = movies.slice(1, 8);
  insertMovies(firstSevenMovies, '.best-movies');
};
