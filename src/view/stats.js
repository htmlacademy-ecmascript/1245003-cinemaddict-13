import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import duration from 'dayjs/plugin/duration';

import Smart from './smart.js';
import {StatsPeriod, RankScore, RankTitle} from '../const.js';

dayjs.extend(isBetween);
dayjs.extend(duration);

const BAR_HEIGHT = 50;

const renderChart = (statisticCtx, genresList) => {
  statisticCtx.height = BAR_HEIGHT * genresList.size;
  return new Chart(statisticCtx, {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: [...genresList.keys()],
      datasets: [{
        data: [...genresList.values()],
        backgroundColor: `#ffe800`,
        hoverBackgroundColor: `#ffe800`,
        anchor: `start`
      }]
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 20
          },
          color: `#ffffff`,
          anchor: `start`,
          align: `start`,
          offset: 40,
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: `#ffffff`,
            padding: 100,
            fontSize: 20
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          barThickness: 24
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      }
    }
  });
};

const getUserRank = (films) => {
  const totalWatch = films.reduce((count, film) => count + Number(film.isWatched), 0);

  if (totalWatch >= RankScore.NOVICE.MIN && totalWatch <= RankScore.NOVICE.MAX) {
    return RankTitle.NOVICE;
  } else if (totalWatch >= RankScore.FAN.MIN && totalWatch <= RankScore.FAN.MAX) {
    return RankTitle.FAN;
  } else if (totalWatch > RankScore.FAN.MAX) {
    return RankTitle.MOVIE_BUFF;
  } else {
    return RankTitle.NONE;
  }
};

const createUserRank = (rank) => rank ? `<p class="statistic__rank">Your rank
  <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  <span class="statistic__rank-label">${rank}</span></p>` : ``;

const createStatsFilter = (statPeriod, activeFilter) => {
  const getCheckedFilter = (filter) => activeFilter === filter ? `checked` : ``;
  return `<input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter"
            id="statistic-${statPeriod}" value="${statPeriod}" ${getCheckedFilter(statPeriod)}>
    <label for="statistic-${statPeriod}" class="statistic__filters-label">
      ${statPeriod === StatsPeriod.ALL_TIME ? `All time` : statPeriod[0].toUpperCase() + statPeriod.slice(1)}</label>`;
};

const createStatsFilters = (activeFilter) => Object.values(StatsPeriod).map((period) => createStatsFilter(period, activeFilter)).join(``);

const createStatisticsTemplate = (stats) => {
  const {watchedFilmsCount, userRank, totalDuration, topGenre, activeFilter} = stats;

  const {hours, minutes} = dayjs.duration(totalDuration, `minutes`).$d;

  return `<section class="statistic">
    ${createUserRank(userRank)}
    <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
      <p class="statistic__filters-description">Show stats:</p>
      ${createStatsFilters(activeFilter)}
    </form>
    <ul class="statistic__text-list">
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">You watched</h4>
        <p class="statistic__item-text">${watchedFilmsCount} <span class="statistic__item-description">movies</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Total duration</h4>
        <p class="statistic__item-text">${hours} <span class="statistic__item-description">h</span> ${minutes} <span class="statistic__item-description">m</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Top genre</h4>
        <p class="statistic__item-text">${topGenre}</p>
      </li>
    </ul>
    <div class="statistic__chart-wrap">
      <canvas class="statistic__chart" width="1000"></canvas>
    </div>
  </section>`;
};

export default class Stats extends Smart {
  constructor(filmsModel) {
    super();

    this._filmsModel = filmsModel;

    this._activeFilter = StatsPeriod.ALL_TIME;

    this._filmsChart = null;

    this._filterChangeHandler = this._filterChangeHandler.bind(this);

    this.restoreHandlers();
  }

  getTemplate() {
    return createStatisticsTemplate(this._getFilmsDataByFilter(this._activeFilter));
  }

  restoreHandlers() {
    this._filterChangeHandler();
    this._setChart();
  }

  _filterChangeHandler() {
    this.getElement().addEventListener(`change`, (evt) => {
      this._activeFilter = evt.target.value;
      this.updateElement();
    });
  }

  _getFilmsDataByFilter(activeFilter) {
    const currentDate = dayjs();
    const weekAgo = dayjs().subtract(7, `day`).toDate();
    const monthAgo = dayjs().subtract(1, `month`).toDate();
    const yearAgo = dayjs().subtract(1, `year`).toDate();

    const films = this._filmsModel.getFilms();
    let genresList = new Map();
    let filmsWatched = [];

    switch (activeFilter) {
      case StatsPeriod.ALL_TIME:
        filmsWatched = films
          .filter((film) => film.isWatched);
        break;

      case StatsPeriod.TODAY:
        filmsWatched = films
          .filter((film) => film.isWatched && dayjs(film.watchingDate).isSame(currentDate, `day`));
        break;

      case StatsPeriod.WEEK:
        filmsWatched = films
          .filter((film) => film.isWatched && dayjs(film.watchingDate).isBetween(weekAgo, currentDate));
        break;

      case StatsPeriod.MONTH:
        filmsWatched = films
          .filter((film) => film.isWatched && dayjs(film.watchingDate).isBetween(monthAgo, currentDate));
        break;

      case StatsPeriod.YEAR:
        filmsWatched = films
          .filter((film) => film.isWatched && dayjs(film.watchingDate).isBetween(yearAgo, currentDate));
        break;
    }

    const watchedFilmsCount = filmsWatched.length;
    const userRank = getUserRank(films);
    const totalDuration = filmsWatched.reduce((count, film) => count + film.filmDuration, 0);
    const allFilmsGenres = filmsWatched.reduce((allGenres, film) => {
      allGenres.push(...film.genres);

      return allGenres;
    }, []);

    allFilmsGenres.forEach((genre) => {
      if (genresList.has(genre)) {
        let genreCount = genresList.get(genre);

        genresList.set(genre, ++genreCount);
      } else {
        genresList.set(genre, 1);
      }
    });

    genresList = new Map([...genresList.entries()].sort((genreA, genreB) => genreB[1] - genreA[1]));
    const topGenre = genresList.size > 0 ? genresList.keys().next().value : ``;

    return {
      userRank,
      watchedFilmsCount,
      totalDuration,
      topGenre,
      genresList,
      activeFilter
    };
  }

  _setChart() {
    if (this._statisticChart) {
      this._statisticChart = null;
    }

    const statisticCtx = this.getElement().querySelector(`.statistic__chart`);
    const {genresList} = this._getFilmsDataByFilter(this._activeFilter);

    renderChart(statisticCtx, genresList);
  }
}
