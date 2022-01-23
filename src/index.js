import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import * as info from "./data/forecast.json";
import { location, forecasts } from "./data/forecast.json";

ReactDOM.render(
  <React.StrictMode>
    <App location={location} forecasts={forecasts} />
  </React.StrictMode>,
  document.getElementById("root")
);
