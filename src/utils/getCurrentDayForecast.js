import {
  getCurrentDayName,
  getCurrentMonthNames,
  getCurentDayNumber,
} from "./getDate";

const getCurrentDayForecast = (data) => ({
  weekday: getCurrentDayName(),
  date: getCurrentMonthNames() + " " + getCurentDayNumber() + "th",
  location: data.name,
  temperature: Math.round(data.main.temp),
  weatherIcon: ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  weatherDescription: data.weather[0].description,
  country: data.sys.country,
});

export default getCurrentDayForecast;
