import {createElement} from "../utils.js";

const createFilmsListCommented = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container js-film-list-commented">
  </div>
</section>`;
};

export default class FilmsListCommented {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListCommented();
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
