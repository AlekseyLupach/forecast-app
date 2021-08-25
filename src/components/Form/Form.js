import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./Form.module.css";

const Form = ({submitSearch}) => {
  const [location, setLocation] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location)
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        aria-label="location"
        type="text"
        className={`${styles.input} form-control`}
        placeholder="Введите город"
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button type="submit" className={styles.button} onClick={onSubmit}>
        ПОИСК
      </button>
    </form>
  );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
}

export default Form;
