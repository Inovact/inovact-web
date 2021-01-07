import {MY_TEAMS, TEAM_DETAILS} from "../actions/types";

const initialState = {
  myTeams: [],
  teamDetails: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MY_TEAMS:
      return {
        ...state,
        myTeams: action.payload.data,
      };
    case TEAM_DETAILS:
      return {
        ...state,
        teamDetails: action.payload.data
      };
    default:
      return { ...state };
  }
}
