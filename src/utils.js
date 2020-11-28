import dayjs from "dayjs";

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
