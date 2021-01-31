import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  onClickEvent = (e) => {
    this.props.fetchData(e.target.value);
  };

  render() {
    return (
      <header>
        <ul className="main-nav">
          <li>
            <NavLink
              to={{ pathname: "search", search: "?q=mountains" }}
              id="mount"
              onClick={this.onClickEvent}
            >
              Mountains
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{ pathname: "search", search: "?q=trees" }}
              id="trees"
              onClick={this.onClickEvent}
            >
              Trees
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{ pathname: "search", search: "?q=stars" }}
              id="stars"
              onClick={this.onClickEvent}
            >
              Stars
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}
