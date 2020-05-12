import React from "react";

const MovieTabs = ({ sort, updateSort }) => {
  return (
    <header className="header">
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={`nav-link ${sort === "popularity.desc" ? "active" : ""}`}
            onClick={() => updateSort("popularity.desc")}
          >
            Popularity
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${sort === "revenue.desc" ? "active" : ""}`}
            onClick={() => updateSort("revenue.desc")}
          >
            Revenue
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${sort === "vote_average" ? "active" : ""}`}
            onClick={() => updateSort("vote_average")}
          >
            Vote average
          </div>
        </li>
      </ul>
    </header>
  );
};

export default MovieTabs;
