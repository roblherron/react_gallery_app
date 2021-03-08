/*
 * High level principles for app:
 * (1) Single Source of Truth: for all values and data
 * (2) Separation of Concerns: only pass data as necessary
 */

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//App Components
import PhotoContainer from "./components/PhotoContainer";
import Search from "./components/Search";
import Nav from "./components/Nav";

/**
 * Notes on Application state:
 * (1) this.state.query (what does this do? A: populates search bar; what is it named? A: searchValue; is it necessary at all? A: yes)
 * (2) the url value ?q=xyz (query param; defined as queryState)
 * The source of truth is (2)
 * We are both reading and writing (1)
 * We are only writing (2)
 * TODOs:
 * (A) We are both reading and writing (2)
 * (B) (1) is subordinate to (2)
 **/
export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/react_gallery_app">
        <div>
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">Photo Search</h1>
            </div>
          </div>
          {/* has local state, to populate search; updates url with new query state */}
          <Search />
        </div>
        <div className="main-nav">
          {/* updates url with new query state */}
          <Nav />
        </div>
        <div className="main-content">
          <Switch>
<<<<<<< Updated upstream
            <Route exact path="/" render={() => <Redirect to="/search" />} />
            <Route path="/search" component={PhotoContainer} />
=======
            <Route path="/" component={PhotoContainer} />
>>>>>>> Stashed changes
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
