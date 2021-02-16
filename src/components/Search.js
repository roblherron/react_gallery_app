import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
  onSearchChange = (e) => {
    this.props.updateQueryState(e.target.value);
  };

  handleSubmit = (e) => {
    if (this.props.queryState !== "") {
      e.preventDefault();
      this.props.onSearch();
      this.props.history.push({
        pathname: "react_gallery_app/search",
        // our state lives in the url... (on purpose) 🤔
        search: `?q=${this.props.queryState}`,
      });
    } else {
      this.props.queryState = "mountains";
    }
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          onChange={this.onSearchChange}
          name="search"
          value={this.props.queryState}
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
