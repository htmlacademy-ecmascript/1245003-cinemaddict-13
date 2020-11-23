import {createUserProfile} from './view/profile.js';
import {createMainNavigation} from './view/navigation.js';
import {createFilters} from './view/filters.js';
import {createFilmsLists} from './view/films-lists.js';
import {createShowMoreButton} from './view/show-more-button.js';
import {createFilmCard} from './view/film-card.js';
import {createFooterStatistics} from './view/footer-stats.js';
// import {createFilmCardPopup} from './view/card-popup.js';

const FILMS_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;

const render = (container, content, place) => {
  return container.insertAdjacentHTML(place, content);
};

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const footerElement = document.querySelector(`footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);

render(headerElement, createUserProfile(), `beforeend`);
render(mainElement, createMainNavigation(), `beforeend`);
render(mainElement, createFilters(), `beforeend`);
render(mainElement, createFilmsLists(), `beforeend`);
render(footerStatisticsElement, createFooterStatistics(), `beforeend`);
// render(footerElement, createFilmCardPopup(), `afterend`);

const filmsMainElement = mainElement.querySelector(`.js-film-list-main`);
const filmsRatedElement = mainElement.querySelector(`.js-film-list-rated`);
const filmsCommentedElement = mainElement.querySelector(`.js-film-list-commented`);

for (let i = 0; i < FILMS_COUNT; i++) {
  render(filmsMainElement, createFilmCard(), `beforeend`);
}

render(filmsMainElement, createShowMoreButton(), `afterend`);

for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
  render(filmsRatedElement, createFilmCard(), `beforeend`);
  render(filmsCommentedElement, createFilmCard(), `beforeend`);
}
