import { useState, React, useEffect } from "react";
import "../styles/App.css";
import axios from "axios";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetailsBox from "./ForecastDetailsBox";
import SearchForm from "./SearchForm";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [searchText, setSearchText] = useState("");

  const [selectedDate, setSelectedDate] = useState(0);

  const selectedForecast = forecasts.find(
    (eforecast) => eforecast.date === selectedDate
  );

  const getForecast = () =>
    // setSelectedDate,
    // setForecasts,
    // setLocation,
    // searchText
    {
      let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

      if (searchText) {
        endpoint += `?city=${searchText}`;
      }

      return axios.get(endpoint).then((response) => {
        setSelectedDate(response.data.forecasts[0].date);
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
      });
    };

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    getForecast(setSelectedDate, setForecasts, setLocation, setSearchText);
  };

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation, setSearchText);
  }, []);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetailsBox forecast={selectedForecast} />}
    </div>
  );
};

export default App;
