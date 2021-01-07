import {
  ALL_PROJECTS,
  LIKE,
  POST_SUCCESS,
  PROJECTS,
  SUBSCRIBERS_PROJECTS,
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  projectExists: false,
  projects: [],
  allProjects: [],
  postSuccess: false,
  likePost: [],
  subscribersProject: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PROJECTS:
      return {
        ...state,
        projectExists: !isEmpty(action.payload),
        projects: action.payload,
      };
    case ALL_PROJECTS:
      return {
        ...state,
        allProjects: action.payload,
      };
    case LIKE: {
      return {
        ...state,
        likePost: action.payload,
      };
    }
    case POST_SUCCESS:
      return {
        ...state,
        postSuccess: true,
      };
    case SUBSCRIBERS_PROJECTS:
      return {
        ...state,
        subscribersProject: action.payload,
      };
    default:
      return state;
  }
}
