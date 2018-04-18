export const getYear = date => new Date(date).getFullYear()

export const getMonth = date => {
  month = new Date(date).getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  return month;
};

export const getDay = date => {
  day = new Date(date).getDate();
  if (day < 10) {
    day = "0" + day;
  }
  return day;
};
