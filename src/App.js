import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//App Components
import PhotoContainer from "./components/PhotoContainer";
import Search from "./components/Search";
import Nav from "./components/Nav";

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
            <Route path="/" component={PhotoContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
