import axios from 'axios';
import {
  GET_ERRORS,
  PROJECTS,
  ALL_PROJECTS,
  POST_SUCCESS,
  SUBSCRIBERS_PROJECTS,
} from './types';

// const baseURL = 'http://localhost:5000';
const baseURL = 'http://inovact.herokuapp.com';

export const postProject = (projectData) => (dispatch) => {
  axios
    .post(`${baseURL}/api/projects/createproject`, projectData)
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

export const subscribersProject = () => (dispatch) => {
  axios.get(`${baseURL}/api/projects/getsubprojects`).then((result) => {
    console.log(result);
    dispatch({
      type: SUBSCRIBERS_PROJECTS,
      payload: result.data,
    });
  });
};

export const getProject = () => (dispatch) => {
  axios
    .get(`${baseURL}/api/projects/getallprojects`)
    .then((res) => {
      dispatch(storeProjects(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userProject = () => (dispatch) => {
  axios
    .get(`${baseURL}/api/projects/myprojects`)
    .then((res) => {
      dispatch(storeMyProjects(res.data));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
      console.log(err);
    });
};

export const deleteProject = (projectId) => (dispatch) => {
  axios
    .delete(`${baseURL}/api/projects/deleteproject/${projectId}`)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const storeMyProjects = (data) => {
  return {
    type: PROJECTS,
    payload: data,
  };
};

export const storeProjects = (data) => {
  return {
    type: ALL_PROJECTS,
    payload: data,
  };
};
