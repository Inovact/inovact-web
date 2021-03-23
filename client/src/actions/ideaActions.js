import axios from 'axios';
import {
  IDEAS,
  GET_ERRORS,
  ALL_IDEAS,
  POST_SUCCESS,
  SUBSCRIBERS_IDEAS,
} from './types';

const baseURL = 'http://inovact.herokuapp.com';

export const postIdea = (ideaData) => (dispatch) => {
  axios
    .post(`${baseURL}/api/ideas/postidea`, ideaData)
    .then((res) => {
      dispatch({
        type: POST_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const getIdeas = () => (dispatch) => {
  axios
    .get(`${baseURL}/api/ideas/getallideas`)
    .then((res) => {
      dispatch(storeIdeas(res.data));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
      console.log(err);
    });
};

export const userIdeas = () => (dispatch) => {
  axios
    .get(`${baseURL}/api/ideas/myideas`)
    .then((res) => {
      console.log(res.data);
      dispatch(storeMyIdeas(res.data));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
      console.log(err);
    });
};

export const subscribersIdeas = () => (dispatch) => {
  axios.get(`${baseURL}/api/ideas/getsubIdeas`).then((result) => {
    console.log(result);
    dispatch({
      type: SUBSCRIBERS_IDEAS,
      payload: result.data,
    });
  });
};

export const storeMyIdeas = (data) => {
  return {
    type: IDEAS,
    payload: data,
  };
};

export const storeIdeas = (data) => {
  return {
    type: ALL_IDEAS,
    payload: data,
  };
};

export const deleteIdea = (ideaId) => (dispatch) => {
  axios
    .delete(`${baseURL}/api/ideas/deleteidea/${ideaId}`)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
