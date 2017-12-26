import React, {Component} from 'react';
import {connect} from 'react-redux'; // connect is for connecting the redux reducer to react component which makes a container
import {selectMovie} from '../actions/index';
import {bindActionCreators} from 'redux';

class MovieList extends Component {
  renderList(){
    return this.props.movies.map((movie)=>{
      return (
        <li key={movie.title} onClick={()=>this.props.selectMovie(movie)}>{movie.title}</li>
      )
    });
  } // this is a stateless component use for map out the list

  render(){
    return (
      <div>
        <ul>{this.renderList()}</ul>
      </div>
    )
  } // this is the main renderer to render out the list
}

function mapStateToProps(state){
  return{
    movies: state.movies
  }
} // this is to map the redux states in reducer to props for react to use

function mapDispatchtoProps(dispatch){
  return bindActionCreators({selectMovie: selectMovie}, dispatch);
}

export default connect (mapStateToProps, mapDispatchtoProps)(MovieList); // the use of connect, connecting reducer to component
