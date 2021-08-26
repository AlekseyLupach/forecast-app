import React, { Fragment } from "react";

import Header from "../Header";

import styles from "./Page.module.css";

import Form from "../Form/Form";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Forecast from "../Forecast/Forecast";
import useForecast from "../../hooks/useForecast";

const Page = () => {
  const { isError, isLoading, forecast, sumbitRequest } = useForecast();

  const onSubmit = (value) => {
    sumbitRequest(value);
  };

  return (
    <Fragment>
      <Header />
      <Form submitSearch={onSubmit} isError={isError} />
      {forecast && (
        <div className={(styles.box, "mt-5")}>
          {isLoading && <Loader />}

          {!isLoading && forecast && <Forecast forecast={forecast} />}
        </div>
      )}
    </Fragment>
  );
};

export default Page;
