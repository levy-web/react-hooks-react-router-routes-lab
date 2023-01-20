import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    {/*{code here}*/}
      <nav>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/movies" >Movies</NavLink></li>
        <li><NavLink to="/directors" >Directors</NavLink></li>
        <li><NavLink to="/actors" >Actors</NavLink></li>
      </nav>
    </div>;
}

export default NavBar;
