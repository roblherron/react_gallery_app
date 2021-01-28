import React, {Component} from 'react';
import {
    NavLink,
  } from 'react-router-dom';


  export default class Nav extends Component {
state = {
  query: ''
}

onClickEvent = (e, query) => {
  query = e.target.innerHTML;
  this.props.data(query);
  this.setState({ query });
  
  console.log("onclick state:", this.state)
  console.log("nav query state within onclick:", query)


}




    render() {
      console.log("Nav props:", this.props.data)
      console.log("Nav query state:", this.state.query)


      return (
        
        <header>
            <ul className="main-nav">
            <li><NavLink to={{ pathname: 'search', search: '?q=mountains' }} id="mount" onClick={this.onClickEvent}>Mountains</NavLink></li>
              <li><NavLink to={{ pathname: 'search', search: '?q=trees' }} id="trees" onClick={this.onClickEvent}>Trees</NavLink></li>
              <li><NavLink to={{ pathname: 'search', search: '?q=stars' }} id="stars" onClick={this.onClickEvent}>Stars</NavLink></li>
            </ul>    
        </header>
      )}

}
