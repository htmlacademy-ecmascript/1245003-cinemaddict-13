import Abstract from "./abstract.js";

const createMainNavigation = (filter, currentFilterType) => {

  const createMainNavItems = () =>
    filter.map(({type, name, count}) =>
      type === `All` ?
        `<a href="#all" class="main-navigation__item ${type === currentFilterType ? `main-navigation__item--active` : ``}" data-filter="${type}">All movies</a>` :
        `<a href="#${name}" class="main-navigation__item ${type === currentFilterType ? `main-navigation__item--active` : ``}" data-filter="${type}">
          ${name[0].toUpperCase() + name.slice(1)}
          <span class="main-navigation__item-count">${count}</span>
        </a>`).join(``);

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
        ${createMainNavItems()}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};

export default class MainNavigation extends Abstract {
  constructor(filter, currentFilterType) {
    super();

    this._filter = filter;
    this._currentFilter = currentFilterType;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createMainNavigation(this._filter, this._currentFilter);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.dataset.filter);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`click`, this._filterTypeChangeHandler);
  }
}
