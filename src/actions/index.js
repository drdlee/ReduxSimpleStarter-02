import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_SINGLE = 'FETCH_SINGLE';
export const DELETE_POST = 'DELETE_POST';

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

export function fetchSingle(data){
  const request = axios.get(`${ROOT_URL}/${data}${API_KEY}`);
  return {
    type: FETCH_SINGLE,
    payload: request
  }
}

export function deletePost(data){
  const request = axios.delete(`${ROOT_URL}/${data}${API_KEY}`);
  return {
    type: DELETE_POST,
    payload: request
  }
}
