import Abstract from "./abstract.js";

const createFilmsListEmpty = () => {
  return `<h2 class="films-list__title">There are no movies in our database</h2>`;
};

export default class FilmsListEmpty extends Abstract {
  getTemplate() {
    return createFilmsListEmpty();
  }
}
