import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => async dispatch => {
  const response = await  axios('https://jsonplaceholder.typicode.com/posts');
  dispatch({
    type: FETCH_POSTS,
    payload: response
  });
}
