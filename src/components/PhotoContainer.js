import React, {Component} from 'react';
import Photo from './Photo';

export default class PhotoContainer extends Component {
// HOW DO I MAKE THE RESULTS DYNAMIC??
render() {
let results = this.props.data;
    
    console.log("results", results, "the Props:", this.props);
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

//APP WILL PULL DATA FROM TABS.JS AND SEND IT TO PHOTOCONTAINER VIA ROUTE RENDER  WHICH WILL BECOME RESULTS 
//TO MAP AND RENDER