const currentDayForecast = (data) => [
  {
    name: "humidity",
    value: data.main.humidity,
    unit: "%",
  },
  {
    name: "wind",
    value: Math.round(data.wind.speed),
    unit: "km/h",
  },
  {
    name: "pressure",
    value: data.main.pressure,
    unit: "mb",
  },
  {
    name: "max temp",
    value: Math.round(data.main.temp_max),
    unit: "°C",
  },
  {
    name: "min temp",
    value: Math.round(data.main.temp_min),
    unit: "°C",
  },
  {
    name: "sunrise",
    value: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
    unit: "°C",
  },
  {
    name: "sunset",
    value: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
    unit: "°C",
  },
];

export default currentDayForecast;
