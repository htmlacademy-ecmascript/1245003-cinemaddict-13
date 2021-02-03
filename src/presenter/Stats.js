import StatsView from "../view/stats.js";
import {render, remove, RenderPosition} from "../utils/render.js";

export default class Statistic {
  constructor(container, filmsModel) {
    this._container = container;
    this._filmsModel = filmsModel;

    this._statsComponent = null;
    this._renderStats = this._renderStats.bind(this);
  }

  init() {
    const films = this._filmsModel.getFilms();

    if (this._statsComponent === null) {
      this._statsComponent = new StatsView(films);
      this._renderStats();

    } else {
      this.destroy();
      this._statsComponent = null;
    }
  }

  destroy() {
    remove(this._statsComponent);
  }

  _renderStats() {
    render(this._container, this._statsComponent, RenderPosition.BEFOREEND);
  }
}
