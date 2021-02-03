import Abstract from './abstract.js';

const createLoading = () => `<h2 class="films-list__title">Loading...</h2>`;

export default class Loading extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createLoading();
  }
}
