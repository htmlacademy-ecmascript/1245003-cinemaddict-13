import UserProfileView from './view/profile.js';
import MainNavigationView from './view/navigation.js';
import SortingView from './view/sorting.js';
import FooterStatisticsView from './view/footer-stats.js';
import FilmsList from './presenter/FilmsList.js';
import {render, RenderPosition} from './utils/render.js';
import {filmCard} from './mocks/film-card.js';
import {generateFilter} from './mocks/filter.js';

const FILMS_COUNT = 22;

const films = new Array(FILMS_COUNT).fill().map(filmCard);
const filters = generateFilter(films);

const bodyElement = document.querySelector(`body`);
const headerElement = bodyElement.querySelector(`.header`);
const mainElement = bodyElement.querySelector(`.main`);
const footerStatisticsElement = document.querySelector(`.footer__statistics`);

render(headerElement, new UserProfileView(), RenderPosition.BEFOREEND);
render(mainElement, new MainNavigationView(filters), RenderPosition.BEFOREEND);
render(mainElement, new SortingView(), RenderPosition.BEFOREEND);

const movieListPresenter = new FilmsList(mainElement);
movieListPresenter.init(films);
render(footerStatisticsElement, new FooterStatisticsView(films.length), RenderPosition.BEFOREEND);
