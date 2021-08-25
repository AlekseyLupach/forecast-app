import React from 'react';
import PropTypes from 'prop-types';

import locationIcon from './img/location-pin.png';
import styles from './CurrentDay.module.css';

const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription, country }) => (
    <div className="d-flex">
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div>
                <h2 className="font-weight-bold mb-1">{weekday}</h2>
                <p className="mb-0">{date}</p>
                <p className="d-flex align-items-baseline font-weight-lighter mb-1">
                    <img width="10" height="15" src={locationIcon} className="mr-2" alt="location pin icon" />
                    <span>{location}, {country}</span>
                </p>
            </div>
            <div>
                
                <h2 className="font-weight-bold mb-1">
                    <span >{temperature}</span>°C
                    <img className="ml-2" width="50" src={weatherIcon} alt="weatherIcon" />
                </h2>
                
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