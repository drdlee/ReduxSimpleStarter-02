import React, { Component } from 'react';
import MovieList from '../containers/MovieList';
import MovieDetail from '../containers/Movie_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <MovieList />
        <MovieDetail />
      </div>
    );
  }
}
