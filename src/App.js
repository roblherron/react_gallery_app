/* 
TO-DO: 
1. create loading feature
2. review code, add comments, and debug
3. BUG history switches url path but doesn't update query results
4. BUG nav tabs aren't set to active when clicked
5. BUG route paths have two 'search/' when navigating
6. (Optional) Refactor using context API to reduce prop drilling
*/

import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

//App Components
import PhotoContainer from "./components/PhotoContainer";
import Search from "./components/Search";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";

// different moments in programming:
// 1. When you are defining a function (function input is ?)
// 2. When you are invoking a function (function input is known)

export default class App extends Component {
  constructor() {
    super();
    // single source of truth; never duplicated anywhere.
    this.state = {
      photos: [],
      // perhaps, instead of using react state for this value, we could rely on the url
      query: "mountains",
    };
  }

  componentDidMount() {
    this.updatePhotosState();
  }

  updateQueryState = (str) => {
    this.setState({ query: `${str}` });
  };

  updatePhotosState = (query = this.state.query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          photos: response.data.photos.photo,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data:", error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">Photo Search</h1>
            </div>
          </div>
          <Search
            onSearch={this.updatePhotosState}
            queryState={this.state.query}
            updateQueryState={this.updateQueryState}
          />
        </div>
        <div className="main-nav">
          <Nav
            fetchData={this.updatePhotosState}
            updateQuery={this.updateQueryState}
          />
        </div>
        <div className="main-content">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/search?q=mountains" />}
            />
            <Route
              path="/search"
              render={() => (
                <PhotoContainer
                  photos={this.state.photos}
                  queryState={this.state.query}
                />
              )}
            />
            {/* this path is never actually rendered 👇 */}
            <Route
              path="/no-results"
              render={() => <NotFound queryState={this.state.query} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
