import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = (props) => {
  const { date, temperature, humidity, wind } = props;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      {/* <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div> */}
      <div className="forecast-summary__temperature">
        Max Temperature: {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__temperature">
        Max Temperature: {temperature.min}
        &deg;C
      </div>
      {/* <div className="forecast-summary__description">{description}</div> */}
      <div className="forecast-summary___humidity">Humidity: {humidity}</div>
      <div className="forecast-summary___wind">Wind Speed: {wind.speed}</div>
    </div>
  );
};

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  // description: PropTypes.string,
  // icon: PropTypes.string,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number.isRequired,
    direction: PropTypes.string.isRequired,
  }).isRequired,
};

export default ForecastDetails;
