import {createElement} from "../utils.js";

const createFilmsLists = () => {
  return `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container js-film-list-main">
    </div>
  </section>

  <section class="films-list films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container js-film-list-rated">
    </div>
  </section>

  <section class="films-list films-list--extra">
    <h2 class="films-list__title">Most commented</h2>
    <div class="films-list__container js-film-list-commented">
    </div>
  </section>
</section>`;
};

export default class FilmsLists {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsLists();
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
