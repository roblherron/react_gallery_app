import React, { Component } from "react";
import { withRouter } from "react-router-dom";

/**
 * This component updates the source of truth, but it also listens to the source of truth (the url)
 * on text input Change, it updates the URL (writing)
 * on URL change, it updates the text input (reading)
 */

class Search extends Component {
  constructor() {
    super();
    this.state = {
      // this value is rightly distinct from the URL param.
      searchValue: "",
    };
  }

  componentDidMount() {
    const queryString = this.props.location.search;
    const urlParams = new URLSearchParams(queryString);
    const newSearchValue = urlParams.get("q");
    this.setState({
      searchValue: newSearchValue,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const queryString = this.props.location.search;
    const urlParams = new URLSearchParams(queryString);
    const newSearchValue = urlParams.get("q");
    if (prevProps.location.search !== this.props.location.search) {
      this.setState({
        searchValue: newSearchValue,
      });
      console.log(this.state.searchValue);
    }
  }

  onSearchChange = (e) => {
    const searchTerm = e.target.value;
    this.setState({
      searchValue: searchTerm,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/search",
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
          value={this.state.searchValue || ""}
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
