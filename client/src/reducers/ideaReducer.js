import {
  ALL_IDEAS,
  IDEAS,
  POST_SUCCESS,
  SUBSCRIBERS_IDEAS,
} from '../actions/types';
const isEmpty = require('is-empty');
const initialState = {
  ideaExists: false,
  ideas: [],
  allIdeas: [],
  subIdeasExists: false,
  subIdeas: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IDEAS:
      return {
        ...state,
        ideaExists: !isEmpty(action.payload),
        ideas: action.payload,
      };
    case SUBSCRIBERS_IDEAS:
      return {
        ...state,
        subIdeasExists: !isEmpty(action.payload),
        subIdeas: action.payload,
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
