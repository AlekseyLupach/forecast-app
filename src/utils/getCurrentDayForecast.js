const forecastNameDayOptions = {
  weekday: "long",
}

const forecastNameMothOptions = {
  month: "long",
  day: "numeric",
}
const getCurrentDayForecast = (data) => ({
  weekday: new Date(data.dt * 1000)
  .toLocaleString("en-US", forecastNameDayOptions),
  date: new Date(data.dt * 1000)
  .toLocaleString("en-US", forecastNameMothOptions) + "th",
  location: data.name,
  temperature: Math.round(data.main.temp),
  weatherIcon: ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  weatherDescription: data.weather[0].description,
  country: data.sys.country,
});

export default getCurrentDayForecast;
