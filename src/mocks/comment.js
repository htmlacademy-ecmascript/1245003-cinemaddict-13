import {getRandomItem, generateDate} from '../utils.js';

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

export const comment = () => {
  return {
    text: getRandomItem(comments),
    emotion: getRandomItem(emotions),
    author: getRandomItem(authors),
    date: generateDate(),
  };
};
