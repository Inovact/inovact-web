import axios from "axios";
import { IDEAS, GET_ERRORS, ALL_IDEAS, POST_SUCCESS } from "./types";

export const postIdea = (ideaData) => (dispatch) => {
  axios
    .post("/api/ideas/postidea", ideaData)
    .then((res) => {
      console.log(res);
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
    .get("/api/ideas/getallideas")
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
    .get("/api/ideas/myideas")
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
