import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          About Project
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/compare">
          Compare Profiles
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
