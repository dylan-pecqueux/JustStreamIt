const baseUrl = 'http://localhost:8000/api/v1/titles/';

export const fetchMovies = async (url) => {
  try {
    const response = await fetch(`${baseUrl}${url}`);
    const object = await response.json();
    return object.results;
  } catch (error) {
    return error;
  }
};

export const fetchMovie = async (url) => {
  try {
    const response = await fetch(url);
    const object = await response.json();
    return object;
  } catch (error) {
    return error;
  }
};
