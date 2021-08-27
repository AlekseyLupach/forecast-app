import React from "react";
import PropTypes from "prop-types";
import styles from "./UpcomingDaysForecastItem.module.css";

const imgUrlBase = "https://openweathermap.org/img/wn";

const UpcomingDaysForecastItem = ({ weekday, temperature, imgUrl }) => (
  <li
    className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}
  >
    <img
      className="mb-2 forecast-icon"
      width="50"
      src={`${imgUrlBase}/${imgUrl}@2x.png`}
      alt="forecast-icon"
    />
    <span className="mb-2">{weekday}</span>
    <span className="font-weight-bold">{temperature}&deg;</span>
  </li>
);

UpcomingDaysForecastItem.propTypes = {
  weekday: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default UpcomingDaysForecastItem;
