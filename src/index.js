// import './style.css';
// import 'bootstrap';
// import Pictures from './api/getMovies.js';
// import displayPictures from './api/diplayMovies.js';

// const upcoming = new Pictures('upcoming');
// upcoming.getData().then(() => {
//   displayPictures(upcoming.data, 'upcoming');
// });

import './style.css';
import buildShows from './modules/buildShows.js';
import { showsCount } from './modules/counters.js';
import getShows from './modules/getShows.js';
import modalStructure from './modules/modal.js';

const itemsTitle = document.querySelector('.items-title');
const allShowsContainer = document.querySelector('.shows-list');

window.addEventListener('load', async () => {
  const shows = await getShows();
  const sixShows = shows.slice(0, 20);

  itemsTitle.innerHTML = `MOVIES (${showsCount(sixShows)})`;
  await buildShows(sixShows, allShowsContainer);

  const commentPopup = [...document.querySelectorAll('.comment-popup')];
  modalStructure(commentPopup, sixShows);
});