import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import dayjs from 'dayjs';
import he from 'he';

import Smart from "./smart.js";
import {EMOTIONS} from '../const';
import {generateDuration} from "../utils/common.js";

dayjs.extend(duration);
dayjs.extend(relativeTime);

const createCommentEmoji = (emotion) => emotion ? `<img src="images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">` : ``;

const createEmotionInputsList = (checkedEmotion) =>
  EMOTIONS.map((emotion) => {
    return `<input class="film-details__emoji-item visually-hidden" name="comment-emoji"
      type="radio" id="emoji-${emotion}" value="${emotion}" ${emotion === checkedEmotion ? `checked` : ``}>
    <label class="film-details__emoji-label" for="emoji-${emotion}">
      <img src="./images/emoji/${emotion}.png" width="30" height="30" alt="${emotion}">
    </label>`;
  }).join(``);

const createNewCommentForm = (emotionTemplate, comment, checkedEmotion) => {
  return `<div class="film-details__new-comment">
  <div class="film-details__add-emoji-label">
    ${emotionTemplate ? emotionTemplate : ``}
  </div>

  <label class="film-details__comment-label">
    <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${comment ? comment : ``}</textarea>
  </label>

  <div class="film-details__emoji-list">
    ${createEmotionInputsList(checkedEmotion)}
  </div>
</div>`;
};

const createFilmCardPopup = (film, emotionElement, comment, checkedEmotion) => {
  const {
    poster,
    title,
    originalTitle,
    rating,
    producer,
    writers,
    actors,
    release,
    filmDuration,
    country,
    genres,
    description,
    ageRating,
    comments,
    isInWatchList,
    isWatched,
    isFavorite
  } = film;

  const humanizeCommentDate = (date) => dayjs(date).fromNow();

  const NewCommentForm = createNewCommentForm(emotionElement, comment, checkedEmotion);

  const {hours, minutes} = dayjs.duration(filmDuration, `minutes`).$d;

  const createFilmDuration = generateDuration(hours, minutes);

  const createGenres = () => {
    return genres.map((genre) => {
      return `<span class="film-details__genre">${genre}</span>`;
    }).join(``);
  };

  const createComments = () =>
    comments.map(({id, author, emotion, date, text}) => {
      return `<li class="film-details__comment" data-id="${id}">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-smile">
        </span>
        <div>
          <p class="film-details__comment-text">${he.encode(text)}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${author}</span>
            <span class="film-details__comment-day">${humanizeCommentDate(date)}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>`;
    }).join(``);

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">
          <p class="film-details__age">${ageRating}</p>
        </div>
        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: ${originalTitle}</p>
            </div>
            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>
          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${producer}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${release}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${createFilmDuration}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${genres.length === 1 ? `Genre` : `Genres`}</td>
              <td class="film-details__cell">
                ${createGenres()}
              </td>
            </tr>
          </table>
          <p class="film-details__film-description">
            ${description}
          </p>
        </div>
      </div>
      <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist"
          ${isInWatchList ? `checked` : ``}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched"
          ${isWatched ? `checked` : ``}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite"
          ${isFavorite ? `checked` : ``}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>
    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>
        <ul class="film-details__comments-list">
          ${createComments()}
        </ul>
        ${NewCommentForm}
      </section>
    </div>
  </form>
</section>`;
};

export default class FilmCardPopup extends Smart {
  constructor(film) {
    super();
    this._data = film;

    this._emotionElement = null;
    this._comment = null;
    this._checkedEmotion = null;

    this._controlsClickHandler = this._controlsClickHandler.bind(this);

    this._emotionChangeHandler = this._emotionChangeHandler.bind(this);
    this._descriptionInputHandler = this._descriptionInputHandler.bind(this);

    this._commentDeleteHandler = this._commentDeleteHandler.bind(this);
    this._commentAddHandler = this._commentAddHandler.bind(this);

    this._setInnerHandlers();
  }

  getTemplate() {
    return createFilmCardPopup(this._data, this._emotionElement, this._comment, this._checkedEmotion);
  }

  _getScrollPosition() {
    this._scrollPosition = this.getElement().scrollTop;
  }

  _setScrollPosition() {
    this.getElement().scrollTo(0, this._scrollPosition);
  }

  _controlsClickHandler(evt) {
    evt.preventDefault();
    this._callback.controlsClick(evt);
  }

  setControlsClickHandler(callback) {
    this._callback.controlsClick = callback;

    this.getElement()
      .querySelector(`.film-details__controls`)
      .addEventListener(`change`, this._controlsClickHandler);
  }

  _emotionChangeHandler(evt) {
    this._emotionElement = createCommentEmoji(evt.target.value);
    this._checkedEmotion = evt.target.value;

    this._getScrollPosition();
    this.updateElement();
  }

  _descriptionInputHandler(evt) {
    this._comment = evt.target.value;
  }

  _disableDeleteButton(button, isDisabled) {
    button.disabled = isDisabled;
    button.innerHTML = isDisabled ? `Deleting…` : `Delete`;
  }

  _commentDeleteHandler(evt) {
    evt.preventDefault();

    if (evt.target.matches(`.film-details__comment-delete`)) {
      this._disableDeleteButton(evt.target, true);
      const id = evt.target.closest(`.film-details__comment`).dataset.id;
      this._callback.commentDelete(id);
    }
  }

  setCommentDeleteHandler(callback) {
    this._callback.commentDelete = callback;
    this.getElement().querySelector(`.film-details__comments-list`)
      .addEventListener(`click`, this._commentDeleteHandler);
  }

  _commentAddHandler(evt) {
    this._callback.commentAdd(evt);
  }

  setCommentAddHandler(callback) {
    this._callback.commentAdd = callback;
    document.addEventListener(`keydown`, this._commentAddHandler);
  }

  _setInnerHandlers() {
    this.getElement()
      .querySelector(`.film-details__emoji-list`)
      .addEventListener(`change`, this._emotionChangeHandler);
    this.getElement()
      .querySelector(`.film-details__comment-input`)
      .addEventListener(`input`, this._descriptionInputHandler);
  }

  restoreHandlers() {
    this.setControlsClickHandler(this._callback.controlsClick);
    this.setCommentDeleteHandler(this._callback.commentDelete);
    this.setCommentAddHandler(this._callback.commentAdd);

    this._setInnerHandlers();
    this._setScrollPosition();
  }

  reset() {
    this._scrollPosition = 0;
    this._emotionElement = null;
    this._comment = null;
    this._checkedEmotion = null;

    this.updateElement();
  }
}
