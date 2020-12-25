import dayjs from "dayjs";

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

export const updateItem = (items, update) => {
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
