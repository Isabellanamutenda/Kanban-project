import './style.css';
import 'bootstrap';
import renderNav from './nav.js';
import renderHome from './home.js';
import renderCat from './cat.js';

renderNav();
renderHome();

const tabLinks = document.querySelectorAll('.nav-link');
const content = document.getElementById('content');

const renderPage = (location, page) => {
  location.innerHTML = '';
  page();
};

const removeActive = () => {
  tabLinks.forEach((link) => {
    if (link.classList.contains('active')) {
      link.classList.remove('active');
    }
  });
};

tabLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (e.target.textContent === 'Home') {
      removeActive();
      e.target.classList.add('active');
      renderPage(content, renderHome);
    }

    if (e.target.textContent === 'All Cats') {
      removeActive();
      e.target.classList.add('active');
      renderPage(content, renderCat);
    }
  });
});