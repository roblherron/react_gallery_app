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
      searchQuery: "mountains",
    };
  }

  componentDidMount() {
    this.updatePhotosState(); //goes into a different lifecycle method.
  }

  // componentDidUpdate(prevState) {
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     this.updatePhotosState();
  //   }
  // } CURRENTLY CREATES INFINITE LOOP
  updatePhotosState = () => {
    // url param is accessible at this.props.location.search; you can parse this using new URLSearchParam. Google it.
    const queryString = this.props.location.search;
    const urlParams = new URLSearchParams(queryString);
    const searchQuery = this.state.searchQuery;
    console.log(searchQuery);
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          photos: response.data.photos.photo,
          searchQuery: urlParams.get("q"),
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data:", error);
      });
  };

  render() {
    const photos = this.state.photos.map((photo, index) => (
      <Photo data={this.state.photos[index]} key={photo.id} />
    ));
    if (this.state.photos.length < 1) {
      // instead of rendering component, we could update the url... 🤔
      return <NotFound />;
    } else {
      return <ul className="photo-container">{photos}</ul>;
    }
  }
}
