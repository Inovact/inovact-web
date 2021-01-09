import axios from 'axios';
import { GET_USER, CURRENT_USER } from './types';

const baseURL = 'https://inovact.herokuapp.com';

export const getUser = (userId) => (dispatch) => {
  axios
    .get(`${baseURL}/api/user/user/${userId}`)
    .then((result) => {
      dispatch(userdetails(result.data));
    })
    .catch((err) => {
      console.log('error', err);
    });
};

export const currentUser = (userId) => (dispatch) => {
  axios
    .get(`${baseURL}/api/user/currentUser/${userId}`, userId)
    .then((result) => {
      const currentUserDetails = {
        ...result.data.user,
        userProjects: { ...result.data.userProjects },
        userIdeas: { ...result.data.userIdeas },
      };
      dispatch(currentuser(currentUserDetails));
    });
};

export const currentuser = (data) => {
  return {
    type: CURRENT_USER,
    payload: data,
  };
};

export const userdetails = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};
