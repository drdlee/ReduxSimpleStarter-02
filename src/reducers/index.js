import { combineReducers } from 'redux';
import MovieList from './reducer_MovieList';
import selectedMovie from './reducer_SelectedMovie';

const rootReducer = combineReducers({
  movies: MovieList,
  selectedMovie: selectedMovie
});

export default rootReducer;
