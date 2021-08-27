const forecastOptions = {
  weekday: "long",
};

const getUpcomingDaysForecast = (daysData) =>
  daysData.slice(1).map((day) => ({
    id: day.dt,
    imgUrl: day.weather[0].icon,
    temperature: Math.round(day.temp.eve),
    weekday: new Date(day.dt * 1000)
      .toLocaleString("en-US", forecastOptions)
      .substr(0, 3),
  }));

export default getUpcomingDaysForecast;
