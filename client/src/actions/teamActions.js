import axios from 'axios';
import { MY_TEAMS, TEAM_DETAILS } from './types';
import M from 'materialize-css';

const baseUrl = 'http://localhost:80';
//const baseUrl = 'https://inovact.herokuapp.com';

export const requestJoin = (projectId) => (dispatch) => {
  axios
    .get(`${baseUrl}/api/teams/requestjoin/${projectId}`)
    .then((result) => {
      if (result.data.success) {
        M.toast({ html: 'Request sent successfully' });
      } else {
        M.toast({ html: 'Error Occured' });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTeamDetails = (projectId) => (dispatch) => {
  console.log(projectId);
  axios
    .get(`${baseUrl}/api/teams/getteam/${projectId}`)
    .then((res) => {
      dispatch(storeTeamDetails(res));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTeams = (userID) => (dispatch) => {
  axios
    .get(`${baseUrl}/api/teams/getteams/${userID}`)
    .then((result) => {
      dispatch(myteams(result));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const storeTeamDetails = (data) => {
  return {
    type: TEAM_DETAILS,
    payload: data,
  };
};

export const myteams = (data) => {
  return {
    type: MY_TEAMS,
    payload: data,
  };
};
