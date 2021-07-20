const slider = (selector) => {
  const moviesSection = document.querySelector(`${selector}-movies`);
  const scrollPerClick = document.querySelector(`${selector} .img-1`).clientWidth + 300;
  let scrollAmount = 0;
  document.querySelector(`${selector} .switchLeft`).addEventListener('click', () => {
    moviesSection.scrollTo({
      top: 0,
      left: (scrollAmount -= scrollPerClick),
      behavior: 'smooth',
    });

    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
  });
  document.querySelector(`${selector} .switchRight`).addEventListener('click', () => {
    if (scrollAmount <= moviesSection.scrollWidth - moviesSection.clientWidth) {
      moviesSection.scrollTo({
        top: 0,
        left: (scrollAmount += scrollPerClick),
        behavior: 'smooth',
      });
    }
  });
};

export default slider;
