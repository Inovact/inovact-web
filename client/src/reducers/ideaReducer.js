import { ALL_IDEAS, IDEAS, POST_SUCCESS } from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  ideaExists: false,
  ideas: [],
  allIdeas: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IDEAS:
      return {
        ...state,
        ideaExists: !isEmpty(action.payload),
        ideas: action.payload,
      };
    case ALL_IDEAS:
      return {
        ...state,
        allIdeas: action.payload,
      };
    case POST_SUCCESS:
      return {
        ...state,
        postSuccess: true,
      };
    default:
      return state;
  }
}
