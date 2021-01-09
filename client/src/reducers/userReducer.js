import { CURRENT_USER, GET_USER } from '../actions/types';
const isEmpty = require('is-empty');
const initialState = {
  userDetails: [],
  userExists: false,
  loggedInUser: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userExists: !isEmpty(action.payload),
        userDetails: action.payload,
      };
    case CURRENT_USER:
      return {
        ...state,
        loggedInUser: action.payload,
      };

    default:
      return state;
  }
}
