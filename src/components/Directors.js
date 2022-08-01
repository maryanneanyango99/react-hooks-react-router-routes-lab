import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsList = directors.map((director) => (
    <div key={director.name}>
      <h1>{director.name}</h1>
      <ul>
        {director.movies.map((movies) => (
          <li key={movies}>{movies}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  )
}

export default Directors;