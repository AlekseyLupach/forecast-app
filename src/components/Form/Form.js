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

  const onSuggestHandler = (text) => {
    setLocation(text);
    setSuggestions([]);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = city.filter((c) => {
        const regex = new RegExp(`${text}`, "gi");
        return c.name.match(regex);
      });
    }
    setLocation(text);
    setSuggestions(matches.slice(0, 5));
  };

  const onBlur = () => {
    setTimeout(() => {
      setSuggestions([]);
    }, 100);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        aria-label="location"
        type="text"
        className={`${styles.input} form-control`}
        placeholder="Введите город"
        value={location}
        onChange={(e) => onChangeHandler(e.target.value)}
        onBlur={onBlur}
        required
      />
      <ul className={styles.suggestionLists}>
        {suggestions &&
          suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={styles.suggestionItems}
              onClick={() => onSuggestHandler(suggestion.name)}
            >
              {suggestion.name}
            </li>
          ))}
      </ul>
      <button type="submit" className={styles.button} onClick={onSubmit}>
        ПОИСК
      </button>
      {isError && <Error message={isError} />}
    </form>
  );
};

Form.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

export default Form;
