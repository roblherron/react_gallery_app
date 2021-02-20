import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <header>
        <ul className="main-nav">
          <li>
            <NavLink
              to={{
                pathname: "/search",
                search: "?q=mountains",
              }}
              id="mountains">
              Mountains
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: "/search",
                search: "?q=trees",
              }}
              id="trees">
              Trees
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{ pathname: "/search", search: "?q=stars" }}
              id="stars">
              Stars
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}
