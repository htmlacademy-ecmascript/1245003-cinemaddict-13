import {createElement} from "../utils.js";

const createFilmsListEmpty = () => {
  return `<h2 class="films-list__title">There are no movies in our database</h2>`;
};

export default class FilmsListEmpty {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListEmpty();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
