import './styles/firstMovie.scss';
import { fetchMovie } from './request';
import slider from './sliders';

const transformArray = (arr) => {
  let transformArr = '';
  arr.forEach((element) => {
    transformArr += `<p>${element}</p>`;
  });
  return transformArr;
};

const modal = async (url) => {
  const movie = await fetchMovie(url);
  const genres = transformArray(movie.genres);
  const directors = transformArray(movie.directors);
  const actors = transformArray(movie.actors);
  const countries = transformArray(movie.countries);
  document.querySelector('.modal-section').innerHTML = `
    <div class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-content_header">
          <div class="modal-content_header_infos">
            <h2>${movie.title}</h2>
            <div class="modal-content_header_infos_first">
              <div>
                <h3>Genres</h3>
                ${genres}
              </div>
              <div>
                <h3>Date de sortie</h3>
                <p>${movie.date_published}</p>
              </div>
              <div>
                <h3>Score imdb</h3>
                <p>${movie.imdb_score}</p>
              </div>
            </div>
            <div class="modal-content_header_infos_second">
              <div>
                <h3>Pays d'origine</h3>
                ${countries}
              </div>
              <div>
                <h3>Durée</h3>
                <p>${movie.duration}</p>
              </div>
            </div>
          </div>
          <img src="${movie.image_url} alt="movie image">
        </div>
        <div class="modal-content_main">
          <h3>Description</h3>
          <p>${movie.long_description}<p>
        </div>
        <div class="modal-content_actors">
          <div>
            <h3>Acteurs</h3>
            ${actors}
          </div>
          <div>
            <h3>Directeurs</h3>
            ${directors}
          </div>
          <div>
            <h3>Rated</h3>
            <p>${movie.rated}</p>
          </div>
          <div>
            <h3>Résultat au Box Office</h3>
            <p>${movie.worldwide_gross_income}</p>
          </div>
        </div>
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
        <button class="btn-more"><i class="fas fa-info-circle"></i> <p>Plus d'infos</p></button>
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

export const stopLoading = () => {
  document.querySelector('.loading').classList.add('hide-loading');
};
