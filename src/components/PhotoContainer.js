import React, { Component } from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

export default class PhotoContainer extends Component {
  render() {
    const photos = this.props.photos.map((photo, index) => (
      <Photo data={this.props.photos[index]} key={photo.id} />
    ));
    if (this.props.photos.length < 1) {
      // instead of rendering component, we could update the url... 🤔
      return <NotFound queryState={this.props.queryState} />;
    } else {
      return <ul className="photo-container">{photos}</ul>;
    }
  }
}
