import React, {Component} from 'react';
import {
    NavLink,
  } from 'react-router-dom';
  import PhotoContainer from './PhotoContainer';

//find out how to communicate the querysearch data from appjs to here and 
//use it in the handleclick function
  export default class Nav extends Component {
state = {
  query: ''
}

onClickEvent = e => {
  this.setState({ query: e.target.innerHTML });
  console.log('nav state:', this.state)
}

    render() {
      return (
        <header>
            <ul className="main-nav">
              <li><NavLink exact to="/" id="mount" onClick={this.onClickEvent}>Mountains</NavLink></li>
              <li><NavLink to="/trees" id="trees" onClick={this.onClickEvent}>Trees</NavLink></li>
              <li><NavLink to="/stars" id="stars" onClick={this.onClickEvent}>Stars</NavLink></li>
            </ul>    
        </header>
      )}

}
