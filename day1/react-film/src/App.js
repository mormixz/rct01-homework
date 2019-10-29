import React, { Component } from 'react';
import FilmListing from './Film/FilmListing';
import FilmDetails from './Film/FilmDetails';
import TMDB from './TMDB';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing
          films={TMDB.films}
        />
        <FilmDetails
          films={TMDB.films}
        />
      </div>
    );
  }
}

export default App;
