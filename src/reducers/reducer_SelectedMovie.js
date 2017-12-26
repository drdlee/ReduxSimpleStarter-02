export default function(currentState = null, action){
  if(action.type === 'MOVIE_SELECTED'){
    return action.payload;
  }else{
    return currentState;
  }
}
