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
    this.updatePhotosState();
  }

  updatePhotosState = () => {
    // url param is accessible at this.props.location.search; you can parse this using new URLSearchParam. Google it.
    const query = '',
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
    console.log("photo props", this.props);
    const photos = this.props.photos.map((photo, index) => (
      <Photo data={this.props.photos[index]} key={photo.id} />
    ));
    if (this.props.photos.length < 1) {
      // instead of rendering component, we could update the url... 🤔
      return <NotFound />;
    } else {
      return <ul className="photo-container">{photos}</ul>;
    }
  }
}
