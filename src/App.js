import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
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
  console.log("App This:", this, "state is", this.state)

}

//results array in photocontainer is not clearing out previous search
//keeps mountains array if mountains is searched, overriding photos array
//etc.
querySearch = (query = 'tech') => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (query === "mountains") {this.setState(
          {mountains: response.data.photos.photo},
          console.log("if then mountains", this.state)
          )}
          else if (query === "trees") {this.setState(
            {trees: response.data.photos.photo},
            console.log("if then trees", this.state)
            )}
          else if (query === "stars") {this.setState(
            {stars: response.data.photos.photo},
            console.log("if then stars", this.state)
            )}
          else if (query) {
            this.setState(
            {photos: response.data.photos.photo},
            console.log("if then query", this.state)
            )}
    })  
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() { 
    console.log("rendered state", this.state);
    return (
      <BrowserRouter>
    <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Photo Search</h1>
        </div>
      </div>
      <Search onSearch={this.querySearch}/> 
      <div className='main-nav'>
        <Nav /*onClick={this.querySearch}*//>
      </div>  
      <div className="main-content">
          <Switch> 
              <Route exact path="/" render={() => <PhotoContainer data={this.state.mountains} />}/>
              <Route path="/trees" render={() => <PhotoContainer data={this.state.trees} />}/>
              <Route path="/stars" render={() => <PhotoContainer data={this.state.stars} />}/>
              <Route path={"/search/:query"} render= {() => <PhotoContainer data={this.state.photos} />}/>
          </Switch>  
      
      </div>      
        
    </div>
      </BrowserRouter>
    );
  }
};

