import React, {Component} from 'react';
import Photo from './Photo';

export default class PhotoContainer extends Component {

render() {
let results = this.props.data;
    
    console.log("results", results, "the Props:", this.props, "This:", this);
    let photos = results.map( (photo, index) =>
        <Photo data= {results[index]}
        key={photo.id}/>);

    return(
        <ul className="photo-container">
            {photos}
        </ul>
    );
}
}
