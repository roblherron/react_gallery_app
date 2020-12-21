import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

export default class Search extends Component {
  


// <li><NavLink to={`search/${query}`} id={`${query}`} onClick={this.onClickEvent}></NavLink></li>
// onClickEvent = e => {
//   this.setState({ query: e.target.innerHTML });

// }



  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  //NEED TO MAKE IT SO THAT UPON SUBMIT THE ROUTE CHANGES TO SEARCH/:QUERY
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
    console.log('search state:', this.state)

  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button">
        <i className="fas fa-search"></i></button>
      </form>      
    );
  } 
}