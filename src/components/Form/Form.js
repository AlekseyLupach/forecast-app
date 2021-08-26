import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Error from "../Error/Error";
import styles from "./Form.module.css";
import axios from "axios";

const Form = ({ submitSearch, isError }) => {
  const [location, setLocation] = useState("");
  const [city, setCity] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadCity = async () => {
      const response = await axios.get("http://localhost:3001/api/cities");
      setCity(response.data);
    };
    loadCity();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
  };

  const onChangeHandler = async (text) => {
    setLocation(text);
    const response = await axios.get(
      `http://localhost:3001/cities?q=${text}&_limit=5`
    );
    setSuggestions(response.data);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {isError && <Error message={isError} />}
      <input
        aria-label="location"
        type="text"
        className={`${styles.input} form-control`}
        placeholder="Введите город"
        required
        value={location}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <ul className={styles.suggestionLists}>
        {suggestions &&
          suggestions.map((suggestion, index) => (
            <li key={index} className={styles.suggestionItems}>
              {suggestion.name}
            </li>
          ))}
      </ul>
      <button type="submit" className={styles.button} onClick={onSubmit}>
        ПОИСК
      </button>
    </form>
  );
};

Form.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

export default Form;
