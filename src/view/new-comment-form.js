import Smart from './smart.js';
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

export default class NewComment extends Smart {
  constructor() {
    super();

    this._emotionElement = null;
    this._comment = null;
    this._checkedEmotion = null;

    this._emotionChangeHandler = this._emotionChangeHandler.bind(this);
    this._descriptionInputHandler = this._descriptionInputHandler.bind(this);

    this._setInnerHandlers();
  }

  getTemplate() {
    return createNewCommentForm(this._emotionElement, this._comment, this._checkedEmotion);
  }

  _emotionChangeHandler(evt) {
    this._emotionElement = createCommentEmoji(evt.target.value);
    this._checkedEmotion = evt.target.value;
    this.updateElement();
  }

  _descriptionInputHandler(evt) {
    this._comment = evt.target.value;
  }

  _setInnerHandlers() {
    this.getElement()
      .querySelectorAll(`.film-details__emoji-item`)
      .forEach((item) => item
      .addEventListener(`change`, this._emotionChangeHandler));
    this.getElement()
      .querySelector(`.film-details__comment-input`)
      .addEventListener(`input`, this._descriptionInputHandler);
  }

  restoreHandlers() {
    this._setInnerHandlers();
  }

  reset() {
    this._emotionElement = null;
    this._comment = null;

    this.updateElement();
  }
}
