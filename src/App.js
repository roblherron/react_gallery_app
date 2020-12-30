/* 
TO-DO: 
1. create loading feature
2. create not-found handler
3. review code and debug
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


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      mountains: [],
      trees: [],
      stars: []
    };
  } 


componentDidMount() {
  this.querySearch();
  this.querySearch('trees') ;
  this.querySearch('stars')
}


querySearch = (query = 'mountains') => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (query === "mountains") {this.setState(
          {mountains: response.data.photos.photo},
          )}
          else if (query === "trees") {this.setState(
            {trees: response.data.photos.photo},
            )}
          else if (query === "stars") {this.setState(
            {stars: response.data.photos.photo},
            )}
          else if (query) {
            this.setState(
            {photos: response.data.photos.photo},
            )}
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
          <Nav /> 
      </div>
      <div className="main-content">
          <Switch> 
              <Route exact path ="/" render={() => <Redirect to="/search/mountains" />} /> 
              <Route path="/search/mountains" render={() => <PhotoContainer data={this.state.mountains} />}/>
              <Route path="/search/trees" render={() => <PhotoContainer data={this.state.trees} />}/>
              <Route path="/search/stars" render={() => <PhotoContainer data={this.state.stars} />}/>
              <Route path={"/search/:query"} render= {() => <PhotoContainer data={this.state.photos} />}/>
          </Switch>  
      
      </div>      
        
    
      </BrowserRouter>
    );
  }
};

 