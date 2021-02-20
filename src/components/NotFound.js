import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    // get this from the URL.
    return (
      <div className="not-found">
        <h1>No Results Found</h1>
        <p>Your search for "HI ROB" returned no results.</p>
      </div>
    );
  }
}
