import {createUserProfile} from './view/profile.js';
import {createMainNavigation} from './view/navigation.js';
import {createFilters} from './view/filters.js';
import {createFilmsLists} from './view/films-lists.js';
import {createShowMoreButton} from './view/show-more-button.js';
import {createFilmCard} from './view/film-card.js';
import {createFooterStatistics} from './view/footer-stats.js';
// import {createFilmCardPopup} from './view/card-popup.js';
import {filmCard} from './mocks/film-card.js';
import {generateFilter} from './mocks/filter.js';

const FILMS_COUNT = 22;
const FILMS_COUNT_PER_STEP = 5;
const EXTRA_FILMS_COUNT = 2;

let renderFilmsCount = FILMS_COUNT_PER_STEP;

const films = new Array(FILMS_COUNT).fill().map(filmCard);

const mostRated = () => films.slice().sort((b, a) => {
  if (a.rating > b.rating) {
    return 1;
  }
  if (a.rating < b.rating) {
    return -1;
  }
  return 0;
});
const mostCommented = () => films.slice().sort((b, a) => {
  if (a.comments.length > b.comments.length) {
    return 1;
  }
  if (a.comments.length < b.comments.length) {
    return -1;
  }
  return 0;
});

const render = (container, content, place) => {
  return container.insertAdjacentHTML(place, content);
};

const showMoreFilms = (evt) => {
  evt.preventDefault();
  films
    .slice(renderFilmsCount, renderFilmsCount + FILMS_COUNT_PER_STEP)
    .forEach((film) => {
      render(filmsMainElement, createFilmCard(film), `beforeend`);
    });

  renderFilmsCount += FILMS_COUNT_PER_STEP;

  if (renderFilmsCount >= films.length) {
    showMoreButton.remove();
  }
};

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const footerElement = document.querySelector(`footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);

render(headerElement, createUserProfile(), `beforeend`);
render(mainElement, createMainNavigation(generateFilter(films)), `beforeend`);
render(mainElement, createFilters(), `beforeend`);
render(mainElement, createFilmsLists(), `beforeend`);
render(footerStatisticsElement, createFooterStatistics(films.length), `beforeend`);
// render(footerElement, createFilmCardPopup(films), `afterend`);

const filmsMainElement = mainElement.querySelector(`.js-film-list-main`);
const filmsRatedElement = mainElement.querySelector(`.js-film-list-rated`);
const filmsCommentedElement = mainElement.querySelector(`.js-film-list-commented`);

render(filmsMainElement, createShowMoreButton(), `afterend`);

const showMoreButton = mainElement.querySelector(`.films-list__show-more`);

showMoreButton.addEventListener(`click`, showMoreFilms);

for (let i = 0; i < FILMS_COUNT_PER_STEP; i++) {
  render(filmsMainElement, createFilmCard(films[i]), `beforeend`);
}

for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
  render(filmsRatedElement, createFilmCard(mostRated()[i]), `beforeend`);
  render(filmsCommentedElement, createFilmCard(mostCommented()[i]), `beforeend`);
}
