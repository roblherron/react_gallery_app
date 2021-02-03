import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  onClickEvent = (e) => {
    e.target.value = e.target.innerHTML;
    this.props.fetchData(e.target.value);
    this.props.updateQuery(e.target.value);
    console.log(e.target.value);
    //current issue is that e.target.value is coming back as undefined
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
