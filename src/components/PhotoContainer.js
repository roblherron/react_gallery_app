import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


export default class PhotoContainer extends Component {

render() {
let results = this.props.data.photos;
//let query = this.props.data.query;
    //console.log("photocontainer query:", query)
   // console.log("results pc:", results, "the Props:", this.props, "This:", this);
   // console.log("results length:", results.length)
    let photos = results.map( (photo, index) =>
        <Photo data= {results[index]}
        key={photo.id}/>);
   if (results.length < 1) {
    return (
    <NotFound />
    )

 } else {
    return (
        <ul className="photo-container">
            {photos}
        </ul>
    );}
};
}
