import './style.css';
import 'bootstrap';
import Pictures from './api/getMovies.js';
import displayPictures from './api/diplayMovies.js';

const upcoming = new Pictures('upcoming');
upcoming.getData().then(() => {
  displayPictures(upcoming.data, 'upcoming');
});