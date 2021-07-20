import './styles/firstMovie.scss';
import { fetchMovie } from './request';
import slider from './sliders';

const modal = async (url) => {
  const movie = await fetchMovie(url);
  let genres = '';
  let directors = '';
  let actors = '';
  let countries = '';
  movie.genres.forEach((genre) => {
    genres += `<p>${genre}</p>`;
  });
  movie.directors.forEach((director) => {
    directors += `<p>${director}</p>`;
  });
  movie.actors.forEach((actor) => {
    actors += `<p>${actor}</p>`;
  });
  movie.countries.forEach((country) => {
    countries += `<p>${country}</p>`;
  });
  document.querySelector('.modal-section').innerHTML = `
    <div class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="${movie.image_url} alt="movie image">
        <h2>${movie.title}</h2>
        <h3>Genres</h3>
        ${genres}
        <h3>Date de sortie</h3>
        <p>${movie.date_published}</p>
        <h3>Rated</h3>
        <p>${movie.rated}</p>
        <h3>Score imdb</h3>
        <p>${movie.imdb_score}</p>
        <h3>Directeurs</h3>
        ${directors}
        <h3>Acteurs</h3>
        ${actors}
        <h3>Durée</h3>
        <p>${movie.duration}</p>
        <h3>Pays d'origine</h3>
        ${countries}
        <h3>Résultat au Box Office</h3>
        <p>${movie.worldwide_gross_income}</p>
        <h3>Description</h3>
        <p>${movie.description}<p>
      </div>
    </div>
  `;
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modal-section').innerHTML = '';
  });
  window.addEventListener('click', (event) => {
    if (event.target === document.querySelector('.modal')) {
      document.querySelector('.modal-section').innerHTML = '';
    }
  });
};

export const insertHeader = (movieInfo) => {
  document.querySelector('.first-movie').innerHTML = `
      <div class="first-movie_info">
        <h2>${movieInfo.title}</h2>
        <p>${movieInfo.description}</p>
        <button class="btn-more">Plus d'info</button>
      </div>
      <img src="${movieInfo.image_url} alt="movie image">
  `;
  document.querySelector('.btn-more').addEventListener('click', () => {
    modal(movieInfo.url);
  }, false);
};

export const insertMovies = (bestMovies, selector) => {
  const moviesSection = document.querySelector(`${selector}-movies`);
  bestMovies.forEach((article, i) => {
    moviesSection.innerHTML += `
        <img class="img-${i}" src="${article.image_url}" data-id="${article.id}" alt="movie image">
    `;
  });
  slider(selector);
  bestMovies.forEach((article) => {
    document.querySelector(`${selector}-movies > img[data-id="${article.id}"]`).addEventListener('click', (e) => {
      e.preventDefault();
      modal(article.url);
    }, false);
  });
};
