import React from "react";
import PropTypes from "prop-types";

import locationIcon from "./img/location-pin.png";
import styles from "./CurrentDay.module.css";

const CurrentDay = ({
  weekday,
  date,
  location,
  temperature,
  weatherIcon,
  weatherDescription,
  country,
}) => (
  <div className="d-flex">
    <div className={styles.img}></div>
    <div className={styles.gradient}></div>
    <div
      className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}
    >
      <div>
        <h2 className="font-weight-bold mb-1">{weekday}</h2>
        <p className="mb-0">{date}</p>
        <p className="d-flex align-items-baseline font-weight-lighter mb-1">
          <img
            width="10"
            height="15"
            src={locationIcon}
            className="mr-2"
            alt="location pin icon"
          />
          <span>
            {location}, {country}
          </span>
        </p>
      </div>
      <div>
        <h2 className="font-weight-bold mb-1 d-flex align-items-center">
          <img
            className="mr-2 font-weight-icon"
            width="60"
            src={weatherIcon}
            alt="weatherIcon"
          />
          <span>{temperature}</span>°C
        </h2>
        <h4 className="font-weight-lighter">{weatherDescription}</h4>
      </div>
    </div>
  </div>
);

CurrentDay.propTypes = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherDescription: PropTypes.string.isRequired,
};

export default CurrentDay;
