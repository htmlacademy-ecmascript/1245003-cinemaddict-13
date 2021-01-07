import dayjs from "dayjs";
import Abstract from "./abstract.js";

const CONTROLS_ACTIVE = `film-card__controls-item--active`;

const createFilmCard = (film) => {
  const {poster, title, rating, release, duration, genres, description, comments, isInWatchList, isWatched, isFavorite} = film;

  const releaseYear = () => dayjs(release).format(`YYYY`);

  const descriptionCut = () => description.length > 140 ? `${description.slice(0, 139)}...` : description;

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${releaseYear()}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src="./images/posters/${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${descriptionCut()}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isInWatchList ? CONTROLS_ACTIVE : ``}"
        type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatched ? CONTROLS_ACTIVE : ``}"
        type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorite ? CONTROLS_ACTIVE : ``}"
        type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class FilmCard extends Abstract {
  constructor(film) {
    super();

    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
    this._controlsClickHandler = this._controlsClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCard(this._film);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click(evt);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }

  _controlsClickHandler(evt) {
    this._callback.controlsClick(evt);
  }

  setControlsClickHandler(callback) {
    this._callback.controlsClick = callback;
    this.getElement().addEventListener(`click`, this._controlsClickHandler);
  }
}
