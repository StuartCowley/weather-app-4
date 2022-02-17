import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastSummaries.css";
import ForecastDetails from "./ForecastDetails";

const ForecastDetailsBox = ({ forecast }) => (
  <div className="forecast-details__box">
    <hr />

    <ForecastDetails
      key={forecast.date}
      date={forecast.date}
      humidity={forecast.humidity}
      temperature={forecast.temperature}
      wind={forecast.wind}
    />
  </div>
);

ForecastDetailsBox.propTypes = {
  forecast: PropTypes.objectOf(
    PropTypes.shape({
      temperature: PropTypes.shape({
        max: PropTypes.number.isRequired,
        min: PropTypes.number.isRequired,
      }),
      wind: PropTypes.shape({
        speed: PropTypes.number.isRequired,
        direction: PropTypes.string.isRequired,
      }),
      humidity: PropTypes.number.isRequired,
      date: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ForecastDetailsBox;
