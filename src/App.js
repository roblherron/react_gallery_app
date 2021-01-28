/* 
TO-DO: 
1. create loading feature
2. review code, add comments, and debug
3. BUG history switches url path but doesn't update query results
4. BUG nav tabs aren't set to active when clicked
5. BUG route paths have two 'search/' when navigating
6. (Optional) Refactor using context API to reduce prop drilling
*/



import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

//App Components
import PhotoContainer from './components/PhotoContainer';
import Search from './components/Search';
import Nav from './components/Nav';
import NotFound from './components/NotFound';



export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      photos: [],
      query: 'mountains'
    
    };
  } 

  componentDidMount() {
    this.querySearch();
    console.log("component mounted");
  } 
 
  querySearch = (query =this.state.query) => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => { 
          this.setState({
            photos: response.data.photos.photo,
            query: `${query}`
          })
      })  
        .catch(error => {
          console.log('Error fetching and parsing data:', error);
        });
    }

  render() { 
    return (
      <BrowserRouter>
        <div>
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">Photo Search</h1>
          </div>
        </div>
        <Search onSearch={this.querySearch}/> 
      </div>  
        <div className='main-nav'>
            <Nav data={this.querySearch}/> 
        </div>
        <div className="main-content">
            <Switch> 
                <Route exact path ="/" render={() => <Redirect to="/search/?q=mountains" />} /> 
                <Route path="/search" render={() => <PhotoContainer data={this.state} />}/>
                <Route path="/no-results" render={() => <NotFound data={this.state}/>} />
            </Switch>  
        </div>
      </BrowserRouter>
    );
  }
};

 