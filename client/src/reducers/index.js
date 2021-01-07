import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import projectReducer from "./projectReducer";
import ideaReducer from "./ideaReducer";
import userReducer from "./userReducer";
import teamReducer from "./teamReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  projects: projectReducer,
  ideas: ideaReducer,
  userDetails: userReducer,
  teams: teamReducer,
});
