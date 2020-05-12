import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Data from "./data/MoviesData";

ReactDOM.render(
  <React.StrictMode>
    <App data={Data} />
  </React.StrictMode>,
  document.getElementById("root"),
);
