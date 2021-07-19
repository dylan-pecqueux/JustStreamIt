import './styles/firstMovie.scss';

export const insertHeader = (movieInfo) => {
  document.querySelector('.first-movie').innerHTML = `
      <div class="first-movie_info">
        <h2>${movieInfo.title}</h2>
        <p>${movieInfo.description}</p>
      </div>
      <img src="${movieInfo.image_url} alt="movie image">
  `;
};

const modal = (article) => {
  document.querySelector('.modal-section').innerHTML = `
    <div class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>${article.title}</p>
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

export const insertMovies = (bestMovies, selector) => {
  const moviesSection = document.querySelector(selector);
  bestMovies.forEach((article) => {
    moviesSection.innerHTML += `
      <button class="btn-${article.id}" data-id="${article.id}">
        <img src="${article.image_url} alt="movie image">
      </button>
    `;
  });
  bestMovies.forEach((article) => {
    document.querySelector(`div${selector} > button[data-id="${article.id}"]`).addEventListener('click', (e) => {
      e.preventDefault();
      modal(article);
    }, false);
  });
};
