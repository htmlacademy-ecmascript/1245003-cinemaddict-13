import {getRandomItem, generateDate} from '../utils/common.js';
import {EMOTIONS} from '../const.js';

const comments = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`
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
    emotion: getRandomItem(EMOTIONS),
    author: getRandomItem(authors),
    date: generateDate(),
  };
};
