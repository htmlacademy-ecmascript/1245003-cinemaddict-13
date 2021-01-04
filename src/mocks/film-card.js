import {getRandomInt, getRandomItem, generateDate} from '../utils/common.js';
import {comment} from './comment.js';

const cutArray = (arr) => arr.slice(0, getRandomInt(1, arr.length));

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

export const filmCard = () => {
  return {
    id: generateId(),
    poster: getRandomItem(posters),
    title: getRandomItem(titles),
    originalTitle: `title`,
    rating: `${getRandomInt(2, 9)}.${getRandomInt(0, 9)}`,
    producer: `Michael Alan Spiller`,
    writers: `Билл Лоуренс, Дэб Фордхэм, Дженей Баккен`,
    actors: `Ken Jenkins, Sam Lloyd, Robert Maschio, Aloma Wright, John C. McGinley`,
    release: generateDate(),
    year: getRandomInt(1929, 1964),
    duration: `${getRandomInt(0, 1)}h ${getRandomInt(0, 60)}m`,
    country: `США`,
    genres: cutArray(genres),
    description: cutArray(descriptions).join(` `),
    ageRating: `16+`,
    comments: new Array(getRandomInt(1, 5)).fill().map(comment),
    isInWatchList: Boolean(getRandomInt(0, 1)),
    isWatched: Boolean(getRandomInt(0, 1)),
    isFavorite: Boolean(getRandomInt(0, 1)),
  };
};
