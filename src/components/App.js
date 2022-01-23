import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

const App = ({ location, forecasts }) => {
  const { city, country } = location;
  const { date, temperature, description, icon } = forecasts;
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={city} country={country} />
      <ForecastSummary
        date={date}
        temperature={temperature}
        description={description}
        icon={icon}
      />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,

  forecasts: PropTypes.shape({
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default App;
