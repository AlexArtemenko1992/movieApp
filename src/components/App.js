import React from "react";
import "./App.css";
import MoviesWrapper from "./movies-wrapper/movies-wrapper";
const App = (props) => {
  return (
    <div>
      <MoviesWrapper data={props.data} />
    </div>
  );
};

export default App;
