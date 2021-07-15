import { fetchMovies, fetchMovie } from './request';
import './styles/firstMovie.scss';

const insertHeader = (movieInfo) => {
  document.querySelector('.first-movie').innerHTML = `
      <div class="first-movie_info">
        <h2>${movieInfo.title}</h2>
        <p>${movieInfo.description}</p>
      </div>
      <img src="${movieInfo.image_url} alt="movie image">
  `;
};

const insertBestMovies = (bestMovies) => {
  const bestMoviesSection = document.querySelector('.best-movies');
  bestMovies.forEach((article) => {
    bestMoviesSection.innerHTML += `
      <h2>${article.title}</h2>
    `;
  });
};

const getBestMovies = async () => {
  const movies = await fetchMovies('?sort_by=-imdb_score');
  const movieInfo = await fetchMovie(movies[0].url);
  insertHeader(movieInfo);
  const firstSevenMovies = movies.slice(1, 9);
  insertBestMovies(firstSevenMovies);
};

export default getBestMovies;
