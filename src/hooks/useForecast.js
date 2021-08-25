import { useState } from "react";
import axios from "axios";

import getCurrentDayDetailedForecast from '../utils/getCurrentDayDetailedForecast'
import getCurrentDayForecast from '../utils/getCurrentDayForecast'
import getUpcomingDaysForecast from '../utils/getUpcomingDaysForecast'

const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getWoeid = async (location) => {
    const { data } = await axios(`${REQUEST_URL}/search`, {params: { query: location }});

    if (!data || data.length === 0) {
      setError("Такой локации не найдено");
      setLoading(false)
      return;
    }

    return data[0]
  };


  const getForecastData = async (woeid) => {
    const {data} = await axios(`${REQUEST_URL}/${woeid}`);
    if (!data || data.length === 0) {
        setError("Что-то пошло не так");
        setLoading(false)
        return
    }

    return data
  }

  const gatherForecastData= (data) => {
    const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title, data.parent)
    console.log(currentDay)
    const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]) 
    const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather)

    setForecast({currentDay, currentDayDetails, upcomingDays})
    setLoading(false);
  }

  const sumbitRequest = async (location) => {
    setLoading(true);
    setError(false);

    const response = await getWoeid(location);
    if (!response?.woeid) return; 

    const data = await getForecastData(response.woeid)
    if (!data) return;

    gatherForecastData(data)
    console.log(response)
    console.log(data)
  };

  return {
    isError,
    isLoading,
    forecast,
    sumbitRequest,
  };
};

export default useForecast;
