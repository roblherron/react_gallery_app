import React, {Component} from 'react';
import {
    NavLink,
  } from 'react-router-dom';


  export default class Nav extends Component {
state = {
  query: ''
}
//callback function that elevates updated query state to app.js

//currently app.js is passing data=this.state and I'm trying to access the query search through this.props.data.query
//in the onclickevent so that I can use the callback to update the query in app.js

onClickEvent = e => {
 
  this.setState({ query: e.target.innerHTML });
console.log(this.state)
}



    render() {
console.log("whatchasay", this.props.data)
console.log("mmm", this.state.query)
if (this.state.query !== '') {
  this.props.data(this.state.query)
}
else (this.props.data('')) //WHEN RUN IT DOESN'T STOP SENDING API REQUESTS

      return (
        
        <header>
            <ul className="main-nav">
              <li><NavLink to="/search/mountains" id="mount" onClick={this.onClickEvent}>Mountains</NavLink></li>
              <li><NavLink to="/search/trees" id="trees" onClick={this.onClickEvent}>Trees</NavLink></li>
              <li><NavLink to="/search/stars" id="stars" onClick={this.onClickEvent}>Stars</NavLink></li>
            </ul>    
        </header>
      )}

}
