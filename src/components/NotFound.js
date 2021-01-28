import React, {Component} from 'react';


export default class NotFound extends Component {
render() {
   // let searchText = this.props.data;
    //console.log("not-found search text:", searchText)
    return (
        <div className="not-found"> 
            <h1>No Results Found</h1>
            <p>Your search for "searchText" returned no results.</p>
        </div>
    )
    
}}