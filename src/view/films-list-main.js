import {createElement} from "../utils.js";

const createFilmsListMain = () => {
  return `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container js-film-list-main">
    </div>
  </section>
</section>`;
};

export default class FilmsListMain {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListMain();
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
