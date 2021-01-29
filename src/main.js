import FilterModel from './model/filter.js';
import FilmsModel from './model/films.js';

import UserProfileView from './view/profile.js';
import FooterStatisticsView from './view/footer-stats.js';
import StatsView from './view/stats.js';

import FilmsList from './presenter/FilmsList.js';
import Filters from './presenter/Filter.js';

import {render, RenderPosition} from './utils/render.js';
import {filmCard} from './mocks/film-card.js';
import {MenuItem} from './const.js';

const FILMS_COUNT = 22;

const films = new Array(FILMS_COUNT).fill().map(filmCard);

const bodyElement = document.querySelector(`body`);
const headerElement = bodyElement.querySelector(`.header`);
const mainElement = bodyElement.querySelector(`.main`);
const footerStatisticsElement = document.querySelector(`.footer__statistics`);

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.FILMS:
      filmListPresenter.show();
      statsComponent.hide();
      break;

    case MenuItem.STATS:
      filmListPresenter.hide();
      statsComponent.show();
      break;
  }
};

render(headerElement, new UserProfileView(), RenderPosition.BEFOREEND);

const filterModel = new FilterModel();

const filmsModel = new FilmsModel();
filmsModel.setFilms(films);

const filmListPresenter = new FilmsList(mainElement, filmsModel, filterModel);
filmListPresenter.init();

const statsComponent = new StatsView(filmsModel);
render(mainElement, statsComponent, RenderPosition.BEFOREEND);
statsComponent.hide();

const filtersPresenter = new Filters(mainElement, filterModel, filmsModel, handleSiteMenuClick);
filtersPresenter.init();

render(footerStatisticsElement, new FooterStatisticsView(films.length), RenderPosition.BEFOREEND);
