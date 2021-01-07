import axios from "axios";
import { GET_USER, CURRENT_USER } from "./types";

export const getUser = (userId) => (dispatch) => {
  axios
    .get(`/api/user/user/${userId}`)
    .then((result) => {
      dispatch(userdetails(result.data));
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const currentUser = (userId) => (dispatch) => {
  axios.get(`/api/user/currentUser/${userId}`, userId).then((result) => {
    dispatch(currentuser(result.data));
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
