import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieDetail extends Component{
  render(){
    if(!this.props.movie){
      return <div>Select a movie to see detail.</div>
    } // untuk nge-cek apa ada data di this.props.movie, karena kalo ngga pilih movie, data ngga ada, kalo ngga ada data akan error
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.movie.title}</div>
        <p>Duration: {this.props.movie.duration}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    movie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(MovieDetail);
