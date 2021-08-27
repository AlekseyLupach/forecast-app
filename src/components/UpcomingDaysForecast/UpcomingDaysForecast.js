import React from "react";
import { Link } from "react-router-dom";
import styles from "./UpcomingDaysForecast.module.css";
import UpcomingDaysForecastitem from "../UpcomingDaysForecastitem";
const UpcomingDaysForecast = ({ days, id }) => (
  <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
    {days.map((day) => (
      <Link to={`days/${day.id}`} key={day.weekday}>
        <UpcomingDaysForecastitem {...day}  />
      </Link>
    ))}
  </ul>
);

export default UpcomingDaysForecast;
