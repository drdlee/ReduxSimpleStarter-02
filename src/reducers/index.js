import { combineReducers } from 'redux';
import MovieList from './reducer_MovieList'

const rootReducer = combineReducers({
  movies: MovieList
});

export default rootReducer;
