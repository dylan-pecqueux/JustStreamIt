import './styles/styles.scss';
import { getBestMovies, getMoviesList } from './GetMovies';
import { stopLoading } from './InsertMovies';

const displayAllMovies = () => {
  getBestMovies();
  getMoviesList('comedy');
  getMoviesList('action');
  getMoviesList('animation');
  setTimeout(stopLoading, 1500);
};

displayAllMovies();
