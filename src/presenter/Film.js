import FilmCardView from '../view/film-card.js';
import FilmCardPopupView from '../view/card-popup.js';
import {render, RenderPosition, remove, replace} from '../utils/render.js';
import {onEscKeyDown, onCtrlEnterKeyDown} from '../utils/common.js';
import {UserAction, UpdateType} from '../const.js';

const FILM_ELEMENT_MATCHES = `.film-card__title, .film-card__poster, .film-card__comments`;

const Mode = {
  OPEN: `OPEN`,
  CLOSE: `CLOSE`
};

export default class FilmPresenter {
  constructor(container, changeData, changeMode, api) {
    this._filmListContainer = container;
    this._changeData = changeData;
    this._changeMode = changeMode;
    this._api = api;

    this._mode = Mode.CLOSE;

    this._popupOpenHandler = this._popupOpenHandler.bind(this);
    this._popupCloseHandler = this._popupCloseHandler.bind(this);
    this._controlsClickHandler = this._controlsClickHandler.bind(this);
    this._commentDeleteHandler = this._commentDeleteHandler.bind(this);
    this._commentAddHandler = this._commentAddHandler.bind(this);
  }

  init(film) {
    this._film = film;

    const prevFilmComponent = this._filmComponent;
    const prevPopupComponent = this._popupComponent;

    this._filmComponent = new FilmCardView(film);
    this._popupComponent = new FilmCardPopupView(film);

    this._filmComponent.setClickHandler(this._popupOpenHandler);
    this._filmComponent.setControlsClickHandler(this._controlsClickHandler);
    this._popupComponent.setControlsClickHandler(this._controlsClickHandler);
    this._popupComponent.setCommentDeleteHandler(this._commentDeleteHandler);

    if (prevFilmComponent) {
      replace(this._filmComponent, prevFilmComponent);
    } else {
      render(this._filmListContainer, this._filmComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (prevPopupComponent) {
      replace(this._popupComponent, prevPopupComponent);

      this._setScrollPosition();
    }

    remove(prevFilmComponent);
    remove(prevPopupComponent);
  }

  _commentAddHandler(evt) {
    if (onCtrlEnterKeyDown(evt)) {
      const text = this._popupComponent.getElement().querySelector(`.film-details__comment-input`);
      const emotion = this._popupComponent.getElement().querySelector(`.film-details__emoji-item[checked]`);

      if (text.value !== `` && emotion) {
        this._getScrollPosition();

        this._changeData(
            UserAction.ADD_COMMENT,
            UpdateType.PATCH,
            Object.assign({}, {id: this._film.id}, {emotion: emotion.value, comment: text.value, date: new Date().toISOString()})
        );
      }
    }
  }

  _commentDeleteHandler(id) {
    this._getScrollPosition();

    this._changeData(
        UserAction.DELETE_COMMENT,
        UpdateType.PATCH,
        Object.assign({}, {id: this._film.id}, {comment: id}
        ));
  }

  _popupOpenHandler(evt) {
    if (evt.target.matches(FILM_ELEMENT_MATCHES)) {
      this._changeMode();
      this._mode = Mode.OPEN;

      render(document.body, this._popupComponent, RenderPosition.BEFOREEND);
      this._popupComponent.setCommentAddHandler(this._commentAddHandler);

      this._popupComponent.restoreHandlers();

      document.body.classList.add(`hide-overflow`);
      document.body.addEventListener(`click`, this._popupCloseHandler);
      document.addEventListener(`keydown`, this._popupCloseHandler);
    }
  }

  _popupCloseHandler(evt) {
    if (evt.target.matches(`.film-details__close-btn`) || onEscKeyDown(evt)) {
      this.resetView();
      this._popupComponent.reset();

      document.body.classList.remove(`hide-overflow`);
      document.body.removeEventListener(`click`, this._popupCloseHandler);
      document.removeEventListener(`keydown`, this._popupCloseHandler);
    }
  }

  _getScrollPosition() {
    this._scrollPosition = this._popupComponent.getElement().scrollTop;
  }

  _setScrollPosition() {
    this._popupComponent.getElement().scrollTo(0, this._scrollPosition);
  }

  _controlsClickHandler(evt) {
    this._getScrollPosition();

    if (evt.target.matches(`.film-card__controls-item--add-to-watchlist`) || evt.target.id === `watchlist`) {
      this._changeData(
          UserAction.UPDATE_FILM,
          UpdateType.PATCH,
          Object.assign({}, this._film, {
            isInWatchList: !this._film.isInWatchList
          }));
    } else
    if (evt.target.matches(`.film-card__controls-item--mark-as-watched`) || evt.target.id === `watched`) {
      this._changeData(
          UserAction.UPDATE_FILM,
          UpdateType.PATCH,
          Object.assign({}, this._film, {
            isWatched: !this._film.isWatched
          }));
    } else
    if (evt.target.matches(`.film-card__controls-item--favorite`) || evt.target.id === `favorite`) {
      this._changeData(
          UserAction.UPDATE_FILM,
          UpdateType.PATCH,
          Object.assign({}, this._film, {
            isFavorite: !this._film.isFavorite
          }));
    }
  }

  resetView() {
    if (this._mode !== Mode.CLOSE) {
      remove(this._popupComponent);
      this.mode = Mode.CLOSE;
    }
  }

  destroy() {
    remove(this._filmComponent);
  }
}
