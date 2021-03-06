import SortingView from '../view/sorting.js';
import FilmsListMainView from '../view/films-list-main.js';
import FilmsListRatedView from '../view/films-lists-rated.js';
import FilmsListCommentedView from '../view/films-list-commented.js';
import FilmsListEmptyView from '../view/films-list-empty';
import ShowMoreButtonView from '../view/show-more-button.js';
import LoadingView from '../view/loading.js';

import FilmPresenter from '../presenter/Film.js';

import Filters from '../utils/filters.js';
import {render, RenderPosition, remove} from '../utils/render.js';
import {sortByDate, sortByRating} from '../utils/sorting.js';
import {SortType, UserAction, UpdateType} from '../const.js';

const FILMS_COUNT_PER_STEP = 5;
// const EXTRA_FILMS_COUNT = 2;

export default class FilmsList {
  constructor(container, filmsModel, filterModel, api) {
    this._filmsModel = filmsModel;
    this._filterModel = filterModel;
    this._api = api;

    this._container = container;
    this._renderedFilmsCount = FILMS_COUNT_PER_STEP;

    this._filmPresenter = new Map();
    this._currentSortType = SortType.DEFAULT;
    this._isLoading = true;

    this._sortingComponent = null;
    this._filmsListMainComponent = new FilmsListMainView();
    this._filmsListRatedComponent = new FilmsListRatedView();
    this._filmsListCommentedComponent = new FilmsListCommentedView();
    this._filmsListEmptyComponent = new FilmsListEmptyView();
    this._showMoreButtonComponent = new ShowMoreButtonView();
    this._loadingComponent = new LoadingView();

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleShowMoreButton = this._handleShowMoreButton.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);

    this._filmsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);

    this._filmsElement = this._filmsListMainComponent.getElement();
    this._filmsMainElement = this._filmsElement.querySelector(`.js-film-list-main`);
  }

  init() {
    render(this._container, this._filmsListMainComponent, RenderPosition.BEFOREEND);

    this._renderAllFilms();
  }

  hide() {
    this._clearFilmList({resetRenderedFilmsCount: true, resetSortType: true});
    this._filmsListMainComponent.getElement().classList.add(`visually-hidden`);
  }

  show() {
    if (this._filmsListMainComponent.getElement().classList.contains(`visually-hidden`)) {
      this._clearFilmList({resetRenderedFilmsCount: true, resetSortType: true});
      this._renderAllFilms();
    }
    this._filmsListMainComponent.getElement().classList.remove(`visually-hidden`);
  }

  _getFilms() {
    const filterType = this._filterModel.getFilter();
    const films = this._filmsModel.getFilms();
    const filteredFilms = Filters.getFilter(films, filterType);

    switch (this._currentSortType) {
      case SortType.DATE:
        return filteredFilms.sort(sortByDate);
      case SortType.RATING:
        return filteredFilms.sort(sortByRating);
    }

    return filteredFilms;
  }

  _renderFilm(container, film) {
    const filmPresenter = new FilmPresenter(container, this._handleViewAction, this._handleModeChange, this._api);
    filmPresenter.init(film);
    this._filmPresenter.set(film.id, filmPresenter);
  }

  _handleModeChange() {
    this._filmPresenter.forEach((value) => value.resetView());
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_FILM:
        this._api.updateFilm(update).then((response) => {
          this._filmsModel.updateFilm(updateType, response);
        });
        break;
      case UserAction.ADD_COMMENT:
        this._api.addComment(update).then((response) => {
          this._filmsModel.addComment(updateType, response);
        });
        break;
      case UserAction.DELETE_COMMENT:
        this._api.deleteComment(update).then(() => {
          this._filmsModel.deleteComment(updateType, update);
        });
        break;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._filmPresenter.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this._clearFilmList();
        this._renderAllFilms();
        break;
      case UpdateType.MAJOR:
        this._clearFilmList({resetRenderedFilmsCount: true, resetSortType: true});
        this._renderAllFilms();
        break;
      case UpdateType.INIT:
        this._isLoading = false;
        remove(this._loadingComponent);
        this._renderAllFilms();
        break;
    }
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;
    this._clearFilmList({resetRenderedFilmsCount: true});
    this._renderAllFilms();
  }

  _renderSorting() {
    if (this._sortingComponent) {
      this._sortingComponent = null;
    }

    this._sortingComponent = new SortingView(this._currentSortType);
    this._sortingComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
    render(this._filmsElement, this._sortingComponent, RenderPosition.AFTERBEGIN);
  }

  _renderFilms(films) {
    films.forEach((film) => this._renderFilm(this._filmsMainElement, film));
  }

  _renderNoFilms() {
    render(this._filmsMainElement, this._filmsListEmptyComponent, RenderPosition.BEFOREEND);
  }

  _renderLoading() {
    render(this._filmsListMainComponent, this._loadingComponent, RenderPosition.BEFOREEND);
  }

  _renderShowMoreButton() {
    const filmsListElement = this._filmsElement.querySelector(`.films-list`);
    render(filmsListElement, this._showMoreButtonComponent, RenderPosition.BEFOREEND);
    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreButton);
  }

  _handleShowMoreButton() {
    const filmsCount = this._getFilms().length;
    const newRenderedFilmsCount = Math.min(filmsCount, this._renderedFilmsCount + FILMS_COUNT_PER_STEP);
    const films = this._getFilms().slice(this._renderedFilmsCount, newRenderedFilmsCount);

    this._renderFilms(films);
    this._renderedFilmsCount = newRenderedFilmsCount;

    if (this._renderedFilmsCount >= filmsCount) {
      this._showMoreButtonComponent.getElement().remove();
      this._showMoreButtonComponent.removeElement();
    }
  }

  // _renderExtraFilms() {
  //   render(this._filmsListMainComponent, this._filmsListRatedComponent, RenderPosition.BEFOREEND);
  //   render(this._filmsListMainComponent, this._filmsListCommentedComponent, RenderPosition.BEFOREEND);
  //   const filmsRatedElement = this._filmsListRatedComponent.getElement().querySelector(`.js-film-list-rated`);
  //   const filmsCommentedElement = this._filmsListCommentedComponent.getElement().querySelector(`.js-film-list-commented`);

  //   const mostRated = () => this._films.sort(sortByRating);

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
    const films = this._getFilms();
    const filmsCount = films.length;

    this._renderFilms(films.slice(0, Math.min(filmsCount, this._renderedFilmsCount)));

    if (filmsCount > this._renderedFilmsCount) {
      this._renderShowMoreButton();
    }
  }

  _renderAllFilms() {
    if (this._isLoading) {
      this._renderLoading();
      return;
    }

    if (this._getFilms().length === 0) {
      this._renderNoFilms();
      return;
    }

    this._renderSorting();
    this._renderFilmsList();
    // this._renderExtraFilms();
    this._renderShowMoreButton();
  }

  _clearFilmList({resetRenderedFilmsCount = false, resetSortType = false} = {}) {
    const filmsCount = this._getFilms().length;

    this._filmPresenter
      .forEach((value) => value.destroy());

    remove(this._sortingComponent);
    remove(this._showMoreButtonComponent);

    this._renderedFilmsCount = resetRenderedFilmsCount ? FILMS_COUNT_PER_STEP : Math.min(filmsCount, this._renderedFilmsCount);

    if (resetSortType) {
      this._currentSortType = SortType.DEFAULT;
    }
  }
}
