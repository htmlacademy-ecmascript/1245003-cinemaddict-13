import FilterModel from './model/filter.js';
import FilmsModel from './model/films.js';

import UserProfileView from './view/profile.js';
import FooterStatisticsView from './view/footer-stats.js';
import StatsView from './view/stats.js';

import FilmsList from './presenter/FilmsList.js';
import Filters from './presenter/Filter.js';
import Stats from './presenter/Stats.js';

import {render, RenderPosition} from './utils/render.js';
import {MenuItem, UpdateType} from './const.js';
import Api from './api.js';

const AUTHORIZATION = `Basic VkeZ31OVLyQdG9Bk`;
const END_POINT = `https://13.ecmascript.pages.academy/cinemaddict`;

export const api = new Api(END_POINT, AUTHORIZATION);

const bodyElement = document.querySelector(`body`);
const headerElement = bodyElement.querySelector(`.header`);
const mainElement = bodyElement.querySelector(`.main`);
const footerStatisticsElement = document.querySelector(`.footer__statistics`);

let statsPresenter = null;

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.FILMS:
      filmListPresenter.show();
      if (statsPresenter !== null) {
        statsPresenter.destroy();
      }
      break;

    case MenuItem.STATS:
      filmListPresenter.hide();
      if (statsPresenter !== null) {
        statsPresenter.destroy();
      }
      statsPresenter = new Stats(mainElement, filmsModel);

      statsPresenter.init();
      break;
  }
};

render(headerElement, new UserProfileView(), RenderPosition.BEFOREEND);

const filterModel = new FilterModel();
const filmsModel = new FilmsModel();

const filmListPresenter = new FilmsList(mainElement, filmsModel, filterModel, api);
const filtersPresenter = new Filters(mainElement, filterModel, filmsModel, handleSiteMenuClick);

filmListPresenter.init();
filtersPresenter.init();

api.getFilms()
  .then((films) => {
    const commentsCollection = films.map((film) => {
      return api.getComments(film.id).then((comments) => {
        film.comments = comments;
      });
    });
    Promise.all(commentsCollection).then(() => {
      filmsModel.setFilms(UpdateType.INIT, films);
    });
    render(footerStatisticsElement, new FooterStatisticsView(films.length), RenderPosition.BEFOREEND);
  })
  .catch(() => {
    filmsModel.setFilms(UpdateType.INIT, []);
    render(footerStatisticsElement, new FooterStatisticsView([].length), RenderPosition.BEFOREEND);
  });
