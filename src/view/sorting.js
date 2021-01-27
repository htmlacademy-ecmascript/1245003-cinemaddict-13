import Abstract from "./abstract.js";
import {SortType} from "../const.js";

const createSorting = (currentSortType) => {
  const getActiveSortingClassName = (type) => type === currentSortType ? `sort__button--active` : ``;

  return `<ul class="sort">
  <li><a href="#" class="sort__button ${getActiveSortingClassName(SortType.DEFAULT)}" data-sort-type="${SortType.DEFAULT}">Sort by default</a></li>
  <li><a href="#" class="sort__button ${getActiveSortingClassName(SortType.DATE)}" data-sort-type="${SortType.DATE}">Sort by date</a></li>
  <li><a href="#" class="sort__button ${getActiveSortingClassName(SortType.RATING)}" data-sort-type="${SortType.RATING}">Sort by rating</a></li>
</ul>`;
};

export default class Sorting extends Abstract {
  constructor(currentSortType) {
    super();

    this._currentSortType = currentSortType;

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSorting(this._currentSortType);
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}
