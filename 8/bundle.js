/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/profile.js */ "./src/view/profile.js");
/* harmony import */ var _view_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/navigation.js */ "./src/view/navigation.js");
/* harmony import */ var _view_sorting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/sorting.js */ "./src/view/sorting.js");
/* harmony import */ var _view_footer_stats_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/footer-stats.js */ "./src/view/footer-stats.js");
/* harmony import */ var _presenter_FilmsList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presenter/FilmsList.js */ "./src/presenter/FilmsList.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _mocks_film_card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mocks/film-card.js */ "./src/mocks/film-card.js");
/* harmony import */ var _mocks_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mocks/filter.js */ "./src/mocks/filter.js");









const FILMS_COUNT = 22;

const films = new Array(FILMS_COUNT).fill().map(_mocks_film_card_js__WEBPACK_IMPORTED_MODULE_6__["filmCard"]);
const filters = Object(_mocks_filter_js__WEBPACK_IMPORTED_MODULE_7__["generateFilter"])(films);

const bodyElement = document.querySelector(`body`);
const headerElement = bodyElement.querySelector(`.header`);
const mainElement = bodyElement.querySelector(`.main`);
const footerStatisticsElement = document.querySelector(`.footer__statistics`);

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(headerElement, new _view_profile_js__WEBPACK_IMPORTED_MODULE_0__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(mainElement, new _view_navigation_js__WEBPACK_IMPORTED_MODULE_1__["default"](filters), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(mainElement, new _view_sorting_js__WEBPACK_IMPORTED_MODULE_2__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);

const movieListPresenter = new _presenter_FilmsList_js__WEBPACK_IMPORTED_MODULE_4__["default"](mainElement);
movieListPresenter.init(films);
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(footerStatisticsElement, new _view_footer_stats_js__WEBPACK_IMPORTED_MODULE_3__["default"](films.length), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);


/***/ }),

/***/ "./src/mocks/comment.js":
/*!******************************!*\
  !*** ./src/mocks/comment.js ***!
  \******************************/
/*! exports provided: comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comment", function() { return comment; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");


const comments = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`
];

const emotions = [
  `angry`,
  `puke`,
  `sleeping`,
  `smile`
];

const authors = [
  `Tim Macoveev`,
  `John Doe`,
  `Michael Random`,
  `Austin Powers`
];

const comment = () => {
  return {
    text: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomItem"])(comments),
    emotion: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomItem"])(emotions),
    author: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomItem"])(authors),
    date: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateDate"])(),
  };
};


/***/ }),

/***/ "./src/mocks/film-card.js":
/*!********************************!*\
  !*** ./src/mocks/film-card.js ***!
  \********************************/
/*! exports provided: filmCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filmCard", function() { return filmCard; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.js */ "./src/mocks/comment.js");



const cutArray = (arr) => arr.slice(0, Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(1, arr.length));

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const posters = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const titles = [
  `Made For Each Other`,
  `Popeye Meets Sinbad`,
  `Sagebrush Trail`,
  `Santa Claus Conquers The Martians`,
  `The Dance of Life`,
  `The Great Flamarion`,
  `The Man With The Golden Arm`
];

const genres = [
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Mystery`
];

const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const filmCard = () => {
  return {
    id: generateId(),
    poster: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomItem"])(posters),
    title: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomItem"])(titles),
    originalTitle: `title`,
    rating: `${Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(2, 9)}.${Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 9)}`,
    producer: `Michael Alan Spiller`,
    writers: `Билл Лоуренс, Дэб Фордхэм, Дженей Баккен`,
    actors: `Ken Jenkins, Sam Lloyd, Robert Maschio, Aloma Wright, John C. McGinley`,
    release: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateDate"])(),
    year: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(1929, 1964),
    duration: `${Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 1)}h ${Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 60)}m`,
    country: `США`,
    genres: cutArray(genres),
    description: cutArray(descriptions).join(` `),
    ageRating: `16+`,
    comments: new Array(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(1, 5)).fill().map(_comment_js__WEBPACK_IMPORTED_MODULE_1__["comment"]),
    isInWatchList: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 1)),
    isWatched: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 1)),
    isFavorite: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 1)),
  };
};


/***/ }),

/***/ "./src/mocks/filter.js":
/*!*****************************!*\
  !*** ./src/mocks/filter.js ***!
  \*****************************/
/*! exports provided: generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
const filmsToFilterMap = {
  watchlist: (films) => films
    .filter((film) => film.isInWatchList).length,
  history: (films) => films
    .filter((film) => film.isWatched).length,
  favorites: (films) => films
    .filter((film) => film.isFavorite).length
};

const generateFilter = (films) => {
  return Object.entries(filmsToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films)
    };
  });
};


/***/ }),

/***/ "./src/presenter/Film.js":
/*!*******************************!*\
  !*** ./src/presenter/Film.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmPresenter; });
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_card_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/card-popup.js */ "./src/view/card-popup.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");





const FILM_ELEMENT_MATCHES = `.film-card__title, .film-card__poster, .film-card__comments`;

class FilmPresenter {
  constructor(container, changeData) {
    this._filmListContainer = container;
    this._changeData = changeData;

    this._popupOpenHandler = this._popupOpenHandler.bind(this);
    this._controlsClickHandler = this._controlsClickHandler.bind(this);
  }

  init(film) {
    this._film = film;

    const prevFilmComponent = this._filmComponent;
    const prevPopupComponent = this._popupComponent;

    this._filmComponent = new _view_film_card_js__WEBPACK_IMPORTED_MODULE_0__["default"](film);
    this._popupComponent = new _view_card_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"](film);
    this._popupComponent.setControlsClickHandler(this._controlsClickHandler);

    this._filmComponent.setClickHandler(this._popupOpenHandler);
    this._filmComponent.setControlsClickHandler(this._controlsClickHandler);

    if (prevFilmComponent) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._filmComponent, prevFilmComponent);
    } else {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._filmListContainer, this._filmComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
      return;
    }

    if (prevPopupComponent) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._popupComponent, prevPopupComponent);
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevFilmComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevPopupComponent);
  }

  _popupOpenHandler(evt) {
    if (evt.target.matches(FILM_ELEMENT_MATCHES)) {
      if (document.querySelector(`.film-details`)) {
        document.querySelector(`.film-details`).remove();
      }
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(document.body, this._popupComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);

      document.body.classList.add(`hide-overflow`);
      document.body.addEventListener(`click`, this._popupCloseHandler);
      document.addEventListener(`keydown`, this._popupCloseHandler);
    }
  }

  _popupCloseHandler(evt) {
    if (evt.target.matches(`.film-details__close-btn`) || Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_3__["onEscKeyDown"])(evt)) {
      document.body.querySelector(`.film-details`).remove();

      document.body.classList.remove(`hide-overflow`);
      document.body.removeEventListener(`click`, this._popupCloseHandler);
      document.removeEventListener(`keydown`, this._popupCloseHandler);
    }
  }

  _controlsClickHandler(evt) {
    if (evt.target.matches(`.film-card__controls-item--add-to-watchlist`) || evt.target.id === `watchlist`) {
      this._changeData(Object.assign({}, this._film, {
        isInWatchList: !this._film.isInWatchList
      }));
    } else
    if (evt.target.matches(`.film-card__controls-item--mark-as-watched`) || evt.target.id === `watched`) {
      this._changeData(Object.assign({}, this._film, {
        isWatched: !this._film.isWatched
      }));
    } else if (evt.target.matches(`.film-card__controls-item--favorite`) || evt.target.id === `favorite`) {
      this._changeData(Object.assign({}, this._film, {
        isFavorite: !this._film.isFavorite
      }));
    }
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._filmComponent);
  }
}


/***/ }),

/***/ "./src/presenter/FilmsList.js":
/*!************************************!*\
  !*** ./src/presenter/FilmsList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsList; });
/* harmony import */ var _view_films_list_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/films-list-main.js */ "./src/view/films-list-main.js");
/* harmony import */ var _view_films_lists_rated_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/films-lists-rated.js */ "./src/view/films-lists-rated.js");
/* harmony import */ var _view_films_list_commented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/films-list-commented.js */ "./src/view/films-list-commented.js");
/* harmony import */ var _view_films_list_empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/films-list-empty */ "./src/view/films-list-empty.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _Film_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Film.js */ "./src/presenter/Film.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");









const FILMS_COUNT_PER_STEP = 5;
// const EXTRA_FILMS_COUNT = 2;

class FilmsList {
  constructor(container) {
    this._container = container;
    this._renderedFilmsCount = FILMS_COUNT_PER_STEP;

    this._filmPresenter = new Map();

    this._filmsListMainComponent = new _view_films_list_main_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._filmsListRatedComponent = new _view_films_lists_rated_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._filmsListCommentedComponent = new _view_films_list_commented_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._filmsListEmptyComponent = new _view_films_list_empty__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._showMoreButtonComponent = new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._handleShowMoreButton = this._handleShowMoreButton.bind(this);

    this._filmsMainElement = this._filmsListMainComponent.getElement().querySelector(`.js-film-list-main`);
  }

  init(films) {
    this._films = films.slice();

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(this._container, this._filmsListMainComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_6__["RenderPosition"].BEFOREEND);
    this._renderAllFilms();
  }

  _renderFilm(container, film) {
    const filmPresenter = new _Film_js__WEBPACK_IMPORTED_MODULE_5__["default"](container, this._handleFilmChange);
    filmPresenter.init(film);
    this._filmPresenter.set(film.id, filmPresenter);
  }

  _handleFilmChange(updatedFilm) {
    this._films = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_7__["updateItem"])(this._films, updatedFilm);
    this._filmPresenter.get(updatedFilm.id).init(updatedFilm);
  }

  _renderFilms(from, to) {
    this._films
      .slice(from, to)
      .forEach((film) => this._renderFilm(this._filmsMainElement, film));
  }

  _renderNoFilms() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(this._filmsMainElement, this._filmsListEmptyComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_6__["RenderPosition"].BEFOREEND);
  }

  _renderShowMoreButton() {
    const filmsListElement = this._filmsListMainComponent.getElement().querySelector(`.films-list`);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(filmsListElement, this._showMoreButtonComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_6__["RenderPosition"].BEFOREEND);
    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreButton);
  }

  _handleShowMoreButton() {
    this._renderFilms(this._renderedFilmsCount, this._renderedFilmsCount + FILMS_COUNT_PER_STEP);
    this._renderedFilmsCount += FILMS_COUNT_PER_STEP;

    if (this._renderedFilmsCount >= this._films.length) {
      this._showMoreButtonComponent.getElement().remove();
      this._showMoreButtonComponent.removeElement();
    }
  }

  // _renderExtraFilms() {
  //   render(this._filmsListMainComponent, this._filmsListRatedComponent, RenderPosition.BEFOREEND);
  //   render(this._filmsListMainComponent, this._filmsListCommentedComponent, RenderPosition.BEFOREEND);
  //   const filmsRatedElement = this._filmsListRatedComponent.getElement().querySelector(`.js-film-list-rated`);
  //   const filmsCommentedElement = this._filmsListCommentedComponent.getElement().querySelector(`.js-film-list-commented`);

  //   const mostRated = () => this._films.sort((b, a) => {
  //     if (a.rating > b.rating) {
  //       return 1;
  //     }
  //     if (a.rating < b.rating) {
  //       return -1;
  //     }
  //     return 0;
  //   });

  //   const mostCommented = () => this._films.sort((b, a) => {
  //     if (a.comments.length > b.comments.length) {
  //       return 1;
  //     }
  //     if (a.comments.length < b.comments.length) {
  //       return -1;
  //     }
  //     return 0;
  //   });

  //   for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
  //     this._renderFilm(filmsRatedElement, mostRated()[i]);
  //     this._renderFilm(filmsCommentedElement, mostCommented()[i]);
  //   }
  // }

  _renderFilmsList() {
    this._renderFilms(0, Math.min(this._films.length, FILMS_COUNT_PER_STEP));

    if (this._films.length > FILMS_COUNT_PER_STEP) {
      this._renderShowMoreButton();
    }
  }

  _renderAllFilms() {
    if (this._films.length === 0) {
      this._renderNoFilms();
    }

    this._renderFilmsList();
    // this._renderExtraFilms();
    this._renderShowMoreButton();
  }

  _clearFilmList() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmPresenter = {};
    this._renderedFilmsCount = FILMS_COUNT_PER_STEP;
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["remove"])(this._showMoreButtonComponent);
  }
}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: onEscKeyDown, getRandomInt, getRandomItem, generateDate, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onEscKeyDown", function() { return onEscKeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomItem", function() { return getRandomItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDate", function() { return generateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


const onEscKeyDown = (evt) => evt.key === `Escape` ? true : false;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateDate = () => {
  const maxDayGap = 7;
  const daysGap = getRandomInt(-maxDayGap, maxDayGap);

  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, `day`).format(`DD MMMM YYYY`);
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, createElement, remove, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, element, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (element instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    element = element.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractView; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/card-popup.js":
/*!********************************!*\
  !*** ./src/view/card-popup.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCardPopup; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmCardPopup = (film) => {
  const {
    poster,
    title,
    originalTitle,
    rating,
    producer,
    writers,
    actors,
    release,
    duration,
    country,
    genres,
    description,
    ageRating,
    comments,
    isInWatchList,
    isWatched,
    isFavorite
  } = film;

  const createGenres = () => {
    return genres.map((genre) => {
      return `<span class="film-details__genre">${genre}</span>`;
    }).join(``);
  };

  const createComments = () => {
    return comments.map(({text, emotion, author, date}) => {
      return `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-smile">
        </span>
        <div>
          <p class="film-details__comment-text">${text}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${author}</span>
            <span class="film-details__comment-day">${date}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>`;
    }).join(``);
  };

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">
          <p class="film-details__age">${ageRating}</p>
        </div>
        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: ${originalTitle}</p>
            </div>
            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>
          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${producer}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${release}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${duration}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${genres.length === 1 ? `Genre` : `Genres`}</td>
              <td class="film-details__cell">
                ${createGenres()}
              </td>
            </tr>
          </table>
          <p class="film-details__film-description">
            ${description}
          </p>
        </div>
      </div>
      <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist"
          ${isInWatchList ? `checked` : ``}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched"
          ${isWatched ? `checked` : ``}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite"
          ${isFavorite ? `checked` : ``}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>
    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>
        <ul class="film-details__comments-list">
          ${createComments()}
        </ul>
        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>
          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here"
              name="comment"></textarea>
          </label>
          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile"
              value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio"
              id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke"
              value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry"
              value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};

class FilmCardPopup extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();

    this._film = film;
    this._controlsClickHandler = this._controlsClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCardPopup(this._film);
  }

  _controlsClickHandler(evt) {
    this._callback.controlsClick(evt);
  }

  setControlsClickHandler(callback) {
    this._callback.controlsClick = callback;
    this.getElement().addEventListener(`click`, this._controlsClickHandler);
  }
}


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const CONTROLS_ACTIVE = `film-card__controls-item--active`;

const createFilmCard = (film) => {
  const {poster, title, rating, year, duration, genres, description, comments, isInWatchList, isWatched, isFavorite} = film;

  const descriptionCut = () => description.length > 140 ? `${description.slice(0, 139)}...` : description;

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src="./images/posters/${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${descriptionCut()}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isInWatchList ? CONTROLS_ACTIVE : ``}"
        type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatched ? CONTROLS_ACTIVE : ``}"
        type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorite ? CONTROLS_ACTIVE : ``}"
        type="button">Mark as favorite</button>
    </div>
  </article>`;
};

class FilmCard extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(film) {
    super();

    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
    this._controlsClickHandler = this._controlsClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCard(this._film);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click(evt);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }

  _controlsClickHandler(evt) {
    this._callback.controlsClick(evt);
  }

  setControlsClickHandler(callback) {
    this._callback.controlsClick = callback;
    this.getElement().addEventListener(`click`, this._controlsClickHandler);
  }
}


/***/ }),

/***/ "./src/view/films-list-commented.js":
/*!******************************************!*\
  !*** ./src/view/films-list-commented.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsListCommented; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListCommented = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container js-film-list-commented">
  </div>
</section>`;
};

class FilmsListCommented extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsListCommented();
  }
}


/***/ }),

/***/ "./src/view/films-list-empty.js":
/*!**************************************!*\
  !*** ./src/view/films-list-empty.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsListEmpty; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListEmpty = () => {
  return `<h2 class="films-list__title">There are no movies in our database</h2>`;
};

class FilmsListEmpty extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsListEmpty();
  }
}


/***/ }),

/***/ "./src/view/films-list-main.js":
/*!*************************************!*\
  !*** ./src/view/films-list-main.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsListMain; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListMain = () => {
  return `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container js-film-list-main">
    </div>
  </section>
</section>`;
};

class FilmsListMain extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsListMain();
  }
}


/***/ }),

/***/ "./src/view/films-lists-rated.js":
/*!***************************************!*\
  !*** ./src/view/films-lists-rated.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsListRated; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListRated = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container js-film-list-rated">
  </div>
</section>`;
};

class FilmsListRated extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilmsListRated();
  }
}


/***/ }),

/***/ "./src/view/footer-stats.js":
/*!**********************************!*\
  !*** ./src/view/footer-stats.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterStatistics; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFooterStatistics = (filmsCount) => {
  return `<p>${filmsCount} movies inside</p>`;
};

class FooterStatistics extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filmsCount) {
    super();

    this._filmsCount = filmsCount;
  }

  getTemplate() {
    return createFooterStatistics(this._filmsCount);
  }
}


/***/ }),

/***/ "./src/view/navigation.js":
/*!********************************!*\
  !*** ./src/view/navigation.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainNavigation; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createMainNavigation = (filter) => {

  const createMainNavItems = () => {
    return filter.map(({name, count}) => {
      return `<a href="#${name}" class="main-navigation__item">${name[0].toUpperCase() + name.slice(1)} <span class="main-navigation__item-count">${count}</span></a>`;
    }).join(``);
  };

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        ${createMainNavItems()}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};

class MainNavigation extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filter) {
    super();

    this._filter = filter;
  }

  getTemplate() {
    return createMainNavigation(this._filter);
  }
}


/***/ }),

/***/ "./src/view/profile.js":
/*!*****************************!*\
  !*** ./src/view/profile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProfile; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createUserProfile = () => {
  return `<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};

class UserProfile extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createUserProfile();
  }
}


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreButton; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createShowMoreButton = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

class ShowMoreButton extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreButton();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}


/***/ }),

/***/ "./src/view/sorting.js":
/*!*****************************!*\
  !*** ./src/view/sorting.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sorting; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSorting = () => {
  return `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`;
};

class Sorting extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createSorting();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map