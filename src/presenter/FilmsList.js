import FilmsListMainView from '../view/films-list-main.js';
import FilmsListRatedView from '../view/films-lists-rated.js';
import FilmsListCommentedView from '../view/films-list-commented.js';
import FilmsListEmptyView from '../view/films-list-empty';
import ShowMoreButtonView from '../view/show-more-button.js';
import FilmPresenter from './Film.js';
import {render, RenderPosition, remove} from '../utils/render.js';
import {updateItem} from '../utils/common.js';

const FILMS_COUNT_PER_STEP = 5;
// const EXTRA_FILMS_COUNT = 2;

export default class FilmsList {
  constructor(container) {
    this._container = container;
    this._renderedFilmsCount = FILMS_COUNT_PER_STEP;

    this._filmPresenter = new Map();

    this._filmsListMainComponent = new FilmsListMainView();
    this._filmsListRatedComponent = new FilmsListRatedView();
    this._filmsListCommentedComponent = new FilmsListCommentedView();
    this._filmsListEmptyComponent = new FilmsListEmptyView();
    this._showMoreButtonComponent = new ShowMoreButtonView();

    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleShowMoreButton = this._handleShowMoreButton.bind(this);

    this._filmsMainElement = this._filmsListMainComponent.getElement().querySelector(`.js-film-list-main`);
  }

  init(films) {
    this._films = films.slice();

    render(this._container, this._filmsListMainComponent, RenderPosition.BEFOREEND);
    this._renderAllFilms();
  }

  _renderFilm(container, film) {
    const filmPresenter = new FilmPresenter(container, this._handleFilmChange, this._handleModeChange);
    filmPresenter.init(film);
    this._filmPresenter.set(film.id, filmPresenter);
  }

  _handleFilmChange(updatedFilm) {
    this._films = updateItem(this._films, updatedFilm);
    this._filmPresenter.get(updatedFilm.id).init(updatedFilm);
  }

  _handleModeChange() {
    this._filmPresenter.forEach((value) => value.resetView());
  }

  _renderFilms(from, to) {
    this._films
      .slice(from, to)
      .forEach((film) => this._renderFilm(this._filmsMainElement, film));
  }

  _renderNoFilms() {
    render(this._filmsMainElement, this._filmsListEmptyComponent, RenderPosition.BEFOREEND);
  }

  _renderShowMoreButton() {
    const filmsListElement = this._filmsListMainComponent.getElement().querySelector(`.films-list`);
    render(filmsListElement, this._showMoreButtonComponent, RenderPosition.BEFOREEND);
    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreButton);
  }

  _handleShowMoreButton() {
    this._renderFilms(this._renderedFilmsCount, this._renderedFilmsCount + FILMS_COUNT_PER_STEP);
    this._renderedFilmsCount += FILMS_COUNT_PER_STEP;

    if (this._renderedFilmsCount >= this._films.length) {
      this._showMoreButtonComponent.getElement().remove();
      this._showMoreButtonComponent.removeElement();
    }
  }

  // _renderExtraFilms() {
  //   render(this._filmsListMainComponent, this._filmsListRatedComponent, RenderPosition.BEFOREEND);
  //   render(this._filmsListMainComponent, this._filmsListCommentedComponent, RenderPosition.BEFOREEND);
  //   const filmsRatedElement = this._filmsListRatedComponent.getElement().querySelector(`.js-film-list-rated`);
  //   const filmsCommentedElement = this._filmsListCommentedComponent.getElement().querySelector(`.js-film-list-commented`);

  //   const mostRated = () => this._films.sort((b, a) => {
  //     if (a.rating > b.rating) {
  //       return 1;
  //     }
  //     if (a.rating < b.rating) {
  //       return -1;
  //     }
  //     return 0;
  //   });

  //   const mostCommented = () => this._films.sort((b, a) => {
  //     if (a.comments.length > b.comments.length) {
  //       return 1;
  //     }
  //     if (a.comments.length < b.comments.length) {
  //       return -1;
  //     }
  //     return 0;
  //   });

  //   for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
  //     this._renderFilm(filmsRatedElement, mostRated()[i]);
  //     this._renderFilm(filmsCommentedElement, mostCommented()[i]);
  //   }
  // }

  _renderFilmsList() {
    this._renderFilms(0, Math.min(this._films.length, FILMS_COUNT_PER_STEP));

    if (this._films.length > FILMS_COUNT_PER_STEP) {
      this._renderShowMoreButton();
    }
  }

  _renderAllFilms() {
    if (this._films.length === 0) {
      this._renderNoFilms();
    }

    this._renderFilmsList();
    // this._renderExtraFilms();
    this._renderShowMoreButton();
  }

  _clearFilmList() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmPresenter = {};
    this._renderedFilmsCount = FILMS_COUNT_PER_STEP;
    remove(this._showMoreButtonComponent);
  }
}
