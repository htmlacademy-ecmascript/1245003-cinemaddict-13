import Abstract from "./abstract.js";

const createFilmsListRated = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container js-film-list-rated">
  </div>
</section>`;
};

export default class FilmsListRated extends Abstract {
  getTemplate() {
    return createFilmsListRated();
  }
}
