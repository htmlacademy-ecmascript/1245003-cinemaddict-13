import Smart from "./smart.js";
import {EMOTIONS} from '../const';

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
    duration,
    country,
    genres,
    description,
    ageRating,
    comments,
    isInWatchList,
    isWatched,
    isFavorite
  } = film;

  const NewCommentForm = createNewCommentForm(emotionElement, comment, checkedEmotion);

  const createGenres = () => {
    return genres.map((genre) => {
      return `<span class="film-details__genre">${genre}</span>`;
    }).join(``);
  };

  const createComments = () => {
    return comments.map(({text, emotion, author, date}) => {
      return `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-smile">
        </span>
        <div>
          <p class="film-details__comment-text">${text}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${author}</span>
            <span class="film-details__comment-day">${date}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>`;
    }).join(``);
  };

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
              <td class="film-details__cell">${duration}</td>
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
