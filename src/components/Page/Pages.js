import React, { Fragment, useEffect } from "react";

import Header from "../Header";

import styles from "./Page.module.css";

import Form from "../Form/Form";

import Loader from "../Loader/Loader";
import Forecast from "../Forecast/Forecast";
import useForecast, {API_BASE_URL} from "../../hooks/useForecast";
import axios from "axios";

const Pages = () => {
  const { isError, isLoading, forecast, sumbitRequest } = useForecast();
  const teststring = "3114513-chej-borw-vkusnye-istorii-ot-shef-povara-anons-prjamogo-jefira-na-fishkinet.html/comment-35911630/"

  useEffect((s) => {
    const { data } = axios(
      `${API_BASE_URL}/forecast/daily?id=${s}&cnt=6&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
      { params: { query: s } }
    );
  }, []);

  const onSubmit = (value) => {
    sumbitRequest(value);
  };
  console.log(forecast);
  return (
    <Fragment>
      <Header />
      <Form submitSearch={onSubmit} isError={isError} />
      {isError
        ? ""
        : forecast && (
            <div className={(styles.box, "mt-5")}>
              {isLoading && <Loader />}

              {!isLoading && forecast && <Forecast forecast={forecast} />}
            </div>
          )}
    </Fragment>
  );
};

export default Pages;
