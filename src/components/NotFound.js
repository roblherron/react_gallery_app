import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>No Results Found</h1>
        <p>Your search for "{this.props.queryState}" returned no results.</p>
      </div>
    );
  }
}
