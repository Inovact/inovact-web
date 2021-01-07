import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {
  GET_ERRORS,
  IS_VERIFIED,
  SET_CURRENT_USER,
  USER_LOADING,
} from './types';

const baseURL = 'http://localhost:5000';

export const confirmUser = (userData) => (dispatch) => {
  axios
    .post(`${baseURL}/api/users/confirm`, userData)
    .then((res) => {
      console.log(res.data);
      dispatch(isVerified(res.data.msg));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const profileEdit = (userData) => (dispatch) => {
  axios
    .put('/api/users/profileEdit', userData)
    .then((res) => {
      localStorage.removeItem('jwtToken');

      setAuthToken(false);

      setCurrentUser({});

      const { token } = res.data;

      localStorage.setItem('jwtToken', token);

      setAuthToken(token);

      try {
        jwt_decode(token);
      } catch (e) {
        console.log(e);
      }
      const decoded = jwt_decode(token);
      // Set current user
      console.log('edit', decoded);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(`${baseURL}/api/users/register`, userData)
    .then((response) => {
      console.log(response.data);
      history.push('/login');
    })
    // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  console.log({ userData });
  axios
    .post(`${baseURL}/api/users/login`, userData)
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;

      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      try {
        jwt_decode(token);
      } catch (e) {
        console.log(e);
      }
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const serialize = (rawToken) => (dispatch) => {
  const token = rawToken.slice(10);
  localStorage.setItem('jwtToken', token);
  setAuthToken(token);
  const decoded = jwt_decode(token);
  dispatch(setCurrentUser(decoded));
  console.log('set');
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const isVerified = (message) => {
  return {
    type: IS_VERIFIED,
    payload: message,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
