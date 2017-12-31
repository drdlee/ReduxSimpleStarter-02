import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=qwerty35';

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(data){
  const request = axios.post(`${ROOT_URL}${API_KEY}`, data);
  return {
    type: CREATE_POST,
    payload: request
  }
}
