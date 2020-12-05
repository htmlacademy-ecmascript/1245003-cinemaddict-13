import dayjs from "dayjs";

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const onEscKeyDown = (evt) => evt.key === `Escape` ? true : false;

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generateDate = () => {
  const maxDayGap = 7;
  const daysGap = getRandomInt(-maxDayGap, maxDayGap);

  return dayjs().add(daysGap, `day`).format(`DD MMMM YYYY`);
};

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};
