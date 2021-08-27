import React from "react";

import styles from "./Header.module.css";
import lc from "./img/lc.svg";

const Header = () => (
  <h1 className={styles.heading}>
    <img width="30" src={lc} alt="weather-icon" />{" "}
    <span className={styles.light}>Weather</span> Forecast
  </h1>
);

export default Header;
