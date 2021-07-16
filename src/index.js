import './styles/styles.scss';
import { getBestMovies, getMoviesList } from './GetMovies';

const displayAllMovies = () => {
  getBestMovies();
  getMoviesList('comedy');
  getMoviesList('action');
  getMoviesList('animation');
};

displayAllMovies();
