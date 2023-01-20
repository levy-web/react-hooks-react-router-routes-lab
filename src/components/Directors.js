import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsItems = directors.map(
    (director)=>{
      const directorMovies = director.movies.map(
        (movieItem)=><li key={movieItem}>{movieItem}</li>)
      return(
        <div key={director.name}>
          <h3>{`Name: ${director.name}`}</h3>
          <p>Movies:</p>
          <ul>{directorMovies}</ul>


        </div>
      )
    })

  return <div>
    {/*{code here}*/}
    <h1>Directors Page</h1>
    {directorsItems}
    
    </div>;
}

export default Directors;
