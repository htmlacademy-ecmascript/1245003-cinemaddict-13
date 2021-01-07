import dayjs from "dayjs";

export const sortByDate = (a, b) => {
  return dayjs(b.release).diff(dayjs(a.release));
};

export const sortByRating = (a, b) => {
  if (a.rating < b.rating) {
    return 1;
  }
  if (a.rating > b.rating) {
    return -1;
  }
  return 0;
};
