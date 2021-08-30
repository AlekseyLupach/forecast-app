import axios from "axios";
import { useState } from "react";
import getCurrentDayForecast from "../utils/getCurrentDayForecast";
import getUpcomingDaysForecast from "../utils/getUpcomingDaysForecast";
import getCurrentDayDetailedForecast from "../utils/getCurrentDayDetailedForecast";

export const API_BASE_URL = "http://api.openweathermap.org/data/2.5";
const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getForecastData = async (location) => {
    try {
      const { data } = await axios(
        `${API_BASE_URL}/weather?dt=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
        { params: { query: location } }
      );

      return data;
    } catch (e) {
      if (e.name === "Error") {
        setError("Такой локации не найдено");
        setLoading(false);
        return;
      }
    }
  };

  const getForecastDataDays = async (location) => {
    const { data } = await axios(
      `${API_BASE_URL}/forecast/daily?dt=${location}&cnt=6&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
      { params: { query: location } }
    );
    if (!data || data.length === 0) {
      setError("Такой локации не найдено");
      setLoading(false);
      return;
    }

    return data;
  };

  const gatherForecastData = (data, daysData) => {
    const currentDay = getCurrentDayForecast(data);
    const currentDayDetails = getCurrentDayDetailedForecast(data);
    const upcomingDays = getUpcomingDaysForecast(daysData.list);

    setForecast({ currentDay, currentDayDetails, upcomingDays });
    setLoading(false);
  };

  const sumbitRequest = async (location) => {
    setLoading(true);
    setError(false);

    const data = await getForecastData(location);
    const daysData = await getForecastDataDays(location);
    gatherForecastData(data, daysData);
  };

  return {
    isError,
    isLoading,
    forecast,
    sumbitRequest,
  };
};

export default useForecast;
