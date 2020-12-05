import UserProfileView from './view/profile.js';
import MainNavigationView from './view/navigation.js';
import SortingView from './view/sorting.js';
import FilmsListsView from './view/films-lists.js';
import ShowMoreButtonView from './view/show-more-button.js';
import FilmCardView from './view/film-card.js';
import FooterStatisticsView from './view/footer-stats.js';
import FilmCardPopupView from './view/card-popup.js';
import {render, RenderPosition, onEscKeyDown} from './utils.js';
import {filmCard} from './mocks/film-card.js';
import {generateFilter} from './mocks/filter.js';

const FILMS_COUNT = 22;
const FILMS_COUNT_PER_STEP = 5;
const EXTRA_FILMS_COUNT = 2;

const films = new Array(FILMS_COUNT).fill().map(filmCard);
const filters = generateFilter(films);

const bodyElement = document.querySelector(`body`);
const headerElement = bodyElement.querySelector(`.header`);
const mainElement = bodyElement.querySelector(`.main`);
const footerStatisticsElement = document.querySelector(`.footer__statistics`);

render(headerElement, new UserProfileView().getElement(), RenderPosition.BEFOREEND);

render(mainElement, new MainNavigationView(filters).getElement(), RenderPosition.BEFOREEND);
render(mainElement, new SortingView().getElement(), RenderPosition.BEFOREEND);
render(mainElement, new FilmsListsView().getElement(), RenderPosition.BEFOREEND);

const renderPopup = (card, film) => {
  const filmElementMatches = `.film-card__title, .film-card__poster, .film-card__comments`;

  const popupOpen = (evt) => {
    if (evt.target.matches(filmElementMatches)) {
      evt.preventDefault();
      bodyElement.classList.add(`hide-overflow`);
      render(bodyElement, new FilmCardPopupView(film).getElement(), RenderPosition.BEFOREEND);
      bodyElement.addEventListener(`click`, popupClose);
      document.addEventListener(`keydown`, popupClose);
    }
  };

  const popupClose = (evt) => {
    if (evt.target.matches(`.film-details__close-btn`) || onEscKeyDown(evt)) {
      evt.preventDefault();
      bodyElement.classList.remove(`hide-overflow`);
      bodyElement.querySelector(`.film-details`).remove();
      bodyElement.removeEventListener(`click`, popupClose);
      document.removeEventListener(`keydown`, popupClose);
    }
  };

  card.addEventListener(`click`, popupOpen);
};

const renderFilm = (container, film) => {
  const filmComponent = new FilmCardView(film);
  const card = filmComponent.getElement();

  render(container, filmComponent.getElement(), RenderPosition.BEFOREEND);
  renderPopup(card, film);
};

const renderAllFilms = () => {
  const filmsElement = mainElement.querySelector(`.films-list`);
  const filmsMainElement = filmsElement.querySelector(`.js-film-list-main`);

  for (let i = 0; i < Math.min(films.length, FILMS_COUNT_PER_STEP); i++) {
    renderFilm(filmsMainElement, films[i]);
  }

  if (films.length > FILMS_COUNT_PER_STEP) {
    let renderedFilmsCount = FILMS_COUNT_PER_STEP;

    render(filmsElement, new ShowMoreButtonView().getElement(), RenderPosition.BEFOREEND);

    const showMoreButton = mainElement.querySelector(`.films-list__show-more`);

    const showMoreFilms = (evt) => {
      evt.preventDefault();
      films
        .slice(renderedFilmsCount, renderedFilmsCount + FILMS_COUNT_PER_STEP)
        .forEach((film) => renderFilm(filmsMainElement, film));

      renderedFilmsCount += FILMS_COUNT_PER_STEP;

      if (renderedFilmsCount >= films.length) {
        showMoreButton.remove();
      }
    };

    showMoreButton.addEventListener(`click`, showMoreFilms);
  }
};

const renderExtraFilms = () => {
  const filmsRatedElement = mainElement.querySelector(`.js-film-list-rated`);
  const filmsCommentedElement = mainElement.querySelector(`.js-film-list-commented`);

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

  for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
    renderFilm(filmsRatedElement, mostRated()[i]);
    renderFilm(filmsCommentedElement, mostCommented()[i]);
  }
};

renderAllFilms();
renderExtraFilms();
render(footerStatisticsElement, new FooterStatisticsView(films.length).getElement(), RenderPosition.BEFOREEND);
