export const getCurrentDayName = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednes­day",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const day = date.getDay();
  return days[day];
};
export const getCurrentMonthNames = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  return monthNames[d.getMonth()];
};

export const getCurentDayNumber = () => {
  const newDate = new Date();
  const result = newDate.getDate();
  return result;
};
