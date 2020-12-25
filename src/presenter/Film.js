import FilmCardView from '../view/film-card.js';
import FilmCardPopupView from '../view/card-popup.js';
import {render, RenderPosition, remove, replace} from '../utils/render.js';
import {onEscKeyDown} from '../utils/common.js';

const FILM_ELEMENT_MATCHES = `.film-card__title, .film-card__poster, .film-card__comments`;

export default class FilmPresenter {
  constructor(container, changeData) {
    this._filmListContainer = container;
    this._changeData = changeData;

    this._popupOpenHandler = this._popupOpenHandler.bind(this);
    this._controlsClickHandler = this._controlsClickHandler.bind(this);
  }

  init(film) {
    this._film = film;

    const prevFilmComponent = this._filmComponent;
    const prevPopupComponent = this._popupComponent;

    this._filmComponent = new FilmCardView(film);
    this._popupComponent = new FilmCardPopupView(film);
    this._popupComponent.setControlsClickHandler(this._controlsClickHandler);

    this._filmComponent.setClickHandler(this._popupOpenHandler);
    this._filmComponent.setControlsClickHandler(this._controlsClickHandler);

    if (prevFilmComponent) {
      replace(this._filmComponent, prevFilmComponent);
    } else {
      render(this._filmListContainer, this._filmComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (prevPopupComponent) {
      replace(this._popupComponent, prevPopupComponent);
    }

    remove(prevFilmComponent);
    remove(prevPopupComponent);
  }

  _popupOpenHandler(evt) {
    if (evt.target.matches(FILM_ELEMENT_MATCHES)) {
      if (document.querySelector(`.film-details`)) {
        document.querySelector(`.film-details`).remove();
      }
      render(document.body, this._popupComponent, RenderPosition.BEFOREEND);

      document.body.classList.add(`hide-overflow`);
      document.body.addEventListener(`click`, this._popupCloseHandler);
      document.addEventListener(`keydown`, this._popupCloseHandler);
    }
  }

  _popupCloseHandler(evt) {
    if (evt.target.matches(`.film-details__close-btn`) || onEscKeyDown(evt)) {
      document.body.querySelector(`.film-details`).remove();

      document.body.classList.remove(`hide-overflow`);
      document.body.removeEventListener(`click`, this._popupCloseHandler);
      document.removeEventListener(`keydown`, this._popupCloseHandler);
    }
  }

  _controlsClickHandler(evt) {
    if (evt.target.matches(`.film-card__controls-item--add-to-watchlist`) || evt.target.id === `watchlist`) {
      this._changeData(Object.assign({}, this._film, {
        isInWatchList: !this._film.isInWatchList
      }));
    } else
    if (evt.target.matches(`.film-card__controls-item--mark-as-watched`) || evt.target.id === `watched`) {
      this._changeData(Object.assign({}, this._film, {
        isWatched: !this._film.isWatched
      }));
    } else if (evt.target.matches(`.film-card__controls-item--favorite`) || evt.target.id === `favorite`) {
      this._changeData(Object.assign({}, this._film, {
        isFavorite: !this._film.isFavorite
      }));
    }
  }

  destroy() {
    remove(this._filmComponent);
  }
}
