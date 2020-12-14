import React, { Component } from 'react';

export default class Search extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
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