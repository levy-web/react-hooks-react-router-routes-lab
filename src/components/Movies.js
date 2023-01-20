import React from "react";
import { movies } from "../data";

function Movies() {
  
  const movieItems = movies.map(
    (movie)=>{
      const genreList = movie.genres.map((list)=><li key={list}>{list}</li>)
      return(
        <div key={movie.title}>
          <h3>{`Name: ${movie.title}`}</h3>
          <p>{`Time: ${movie.time}`}</p>
          <ul>{genreList}</ul>
        </div>
      )
    })

  return <div>
    {/*{code here}*/}
    <>
    <h1>Movies Page</h1>
    <div>
      {movieItems}
    </div>
    </>
    </div>;
}

export default Movies;
