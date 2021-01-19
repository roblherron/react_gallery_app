import React, { Component } from 'react';
import {
  withRouter
} from 'react-router-dom';





class Search extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }




  handleSubmit = e => {
    e.preventDefault();
    console.log("shapoopy", this.query.value)
    this.props.onSearch(this.query.value);
    console.log("whateverthisis", this.props.onSearch)
    console.log('query value:', this.query.value);
    let query = this.query.value;
    let path = `/search/${query}`;
    this.props.history.push(path);
    e.currentTarget.reset();

    console.log('search state:', this.state.searchText);
    console.log(this.props.onSearch)

    
  
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
export default withRouter(Search);