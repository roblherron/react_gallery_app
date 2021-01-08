import React, {Component} from 'react';
import {
    NavLink,
  } from 'react-router-dom';


  export default class Nav extends Component {
state = {
  query: ''
}

onClickEvent = e => {
  this.setState({ query: e.target.innerHTML });
  console.log("bippity", this.props.data)
}

    render() {
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
