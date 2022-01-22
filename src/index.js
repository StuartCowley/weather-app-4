import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as location from "./data/forecast.json";

console.log(location);
ReactDOM.render(
  <React.StrictMode>
    <App location={location} />
  </React.StrictMode>,
  document.getElementById("root")
);
