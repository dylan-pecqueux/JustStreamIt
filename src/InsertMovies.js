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

export const insertMovies = (bestMovies, selector) => {
  const moviesSection = document.querySelector(selector);
  bestMovies.forEach((article) => {
    moviesSection.innerHTML += `
      <img src="${article.image_url} alt="movie image">
    `;
  });
};
