import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import info from "./data/forecast.json";
// import { location, forecasts } from "./data/forecast.json";

ReactDOM.render(
  <React.StrictMode>
    <App location={info.location} forecasts={info.forecasts} />
  </React.StrictMode>,
  document.getElementById("root")
);
