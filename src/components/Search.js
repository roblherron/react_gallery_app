import React, { Component } from "react";
import { withRouter } from "react-router-dom";

/**
 * This component updates the source of truth, but it also listens to the source of truth (the url)
 * on text input Change, it updates the URL (writing)
 * on URL change, it updates the text input (reading)
 */

//  TODO: listen for changes to URL, update the search bar with text
class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "mountains",
    };
  }

  onSearchChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/search",
      // our state lives in the url... (on purpose) 🤔
      search: `?q=${this.state.searchValue}`,
    });
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          onChange={this.onSearchChange}
          name="search"
          value={this.state.searchValue}
          placeholder="Search..."
        />
        <button type="submit" id="submit" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default withRouter(Search);
