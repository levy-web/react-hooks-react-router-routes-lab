import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsItems = actors.map(
    (actor)=>{
      const actorMoviePresent = actor.movies.map(
        (item)=><li key={item}>{item}</li>)
     return <div key={actor.name}>
        <h3>{`Name: ${actor.name}`}</h3>
        <p>Movies: </p>
        <ul>{actorMoviePresent}</ul>
        
      </div>
    }) 
  return <div>
    {/*{code here}*/}
    <h1>Actors Page</h1>
    {actorsItems}

    </div>;
}

export default Actors;
