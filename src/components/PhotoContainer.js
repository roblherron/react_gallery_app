import React, { Component } from "react";
import axios from "axios";

import apiKey from "../config";

import Photo from "./Photo";
import NotFound from "./NotFound";

/**
 * This component is the bread and butter of the entire application:
 * It fetches the data
 * Using a single source of truth, for what kind of data (kittens, mountains, stars, whatever)
 * That data which is used during fetch, comes from the URL, not the search bar.
 */

//  TODO: listen for changes to URL, fetch the data when it changes. Look at react documentation for life cycle methods to do this.
export default class PhotoContainer extends Component {
  constructor() {
    super();
    // single source of truth; never duplicated anywhere.
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    // this does execute on initialRender
    this.updatePhotosState();
  }

  componentDidUpdate(prevProps, prevState) {
    // this does not execute on initialRender
    if (prevProps.location.search !== this.props.location.search) {
      this.updatePhotosState();
    }
  }

  updatePhotosState = () => {
    const queryString = this.props.location.search;
    const urlParams = new URLSearchParams(queryString);
    const searchQuery = urlParams.get("q");
    console.log(searchQuery);
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&safe_search=1&per_page=24&format=json&nojsoncallback=1`
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
    const queryString = this.props.location.search;
    const urlParams = new URLSearchParams(queryString);
    const searchQuery = urlParams.get("q");
    const photos = this.state.photos.map((photo, index) => (
      <Photo data={this.state.photos[index]} key={photo.id} />
    ));
    if (!this.props.location.search) {
      return (
        <h2>
          <i>Please enter a search term.</i>
        </h2>
      );
    }
    if (this.state.photos.length < 1) {
      return <NotFound searchQuery={searchQuery} />;
    } else {
      return <ul className="photo-container">{photos}</ul>;
    }
  }
}
