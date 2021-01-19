/* 
TO-DO: 
1. create loading feature
2. review code, add comments, and debug
*/



import React, {Component} from 'react';
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
      // mountains: [],
      // trees: [],
      // stars: [],
      query: ''
    };
  } 


componentDidMount() {
  this.querySearch();
  // this.querySearch('trees') ;
  // this.querySearch('stars')
  console.log("component mounted")
}


querySearch = (query = 'mountains') => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
         this.setState(
          {photos: response.data.photos.photo,
            query: `${query}`},
          console.log("state", this.state)
          )
    })  
      .catch(error => {
        console.log('Error fetching and parsing data', error);
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
              <Route exact path ="/" render={() => <Redirect to="/search/mountains" />} /> 
              <Route path="/search/mountains" render={() => <PhotoContainer data={this.state} />}/>
              <Route path="/search/trees" render={() => <PhotoContainer data={this.state} />}/>
              <Route path="/search/stars" render={() => <PhotoContainer data={this.state} />}/>
              <Route path={"/search/:query"} render= {() => <PhotoContainer data={this.state}/>}/>
              <Route path="/no-results" render={() => <NotFound data={this.state}/>} />
          </Switch>  
      
      </div>      
        
    
      </BrowserRouter>
    );
  }
};

 