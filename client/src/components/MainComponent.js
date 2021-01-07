import React from "react";
import { Switch } from "react-router-dom";
import Landing from "./layout/Landing";
import Register from "./auth/Register";
import Login from "./auth/Login";
import serializeUser from "./auth/serializeUser";
import confirmed from "./auth/confirmed";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import PrivateRoute from "../components/private-route/PrivateRoute";
import Dashboard from "../components/dashboard/Dashboard";
import InterestsPage from "./InterestsPage";
import ProfileOther from "./profile-other/ProfileOther";
import ProfileEdit from "./dashboard/ProfileEdit";
import Posts from "./dashboard/Posts";
import LandingNew from "./layout/LandingNew";
import Projects from "./content/Projects";
import Ideas from "./content/Ideas";
import ProjectInfo from "./projects/projectInfo";
import SubscriberProjects from "./projects/SubscriberProjects";
import Teams from "./teams/Teams";
import TeamDetails from "./teams/TeamDetails";
import Reset from "./auth/Reset";
import NewPassword from "./auth/NewPassword";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const MainComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/reset/:token" component={NewPassword} />
        <Route exact path="/serializeUser" component={serializeUser} />
        <Route exact path="/landingNew" component={LandingNew} />
        <Route exact path="/confirmed" component={confirmed} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/Interests" component={InterestsPage} />
          <PrivateRoute
            exact
            path="/profileOther/:userId"
            component={ProfileOther}
          />
          <PrivateRoute
            exact
            path="/TeamDetails/:projectId"
            component={TeamDetails}
          />
          <PrivateRoute
            exact
            path="/dashboard/editProfile"
            component={ProfileEdit}
          />
          <PrivateRoute
            exact
            path="/projects/projectInfo"
            component={ProjectInfo}
          />
          <PrivateRoute exact path="/Posts" component={Posts} />
          <PrivateRoute exact path="/projects" component={Projects} />
          <PrivateRoute
            exact
            path="/subscribersProjects"
            component={SubscriberProjects}
          />
          <PrivateRoute exact path="/ideas" component={Ideas} />
          <PrivateRoute exact path="/teams" component={Teams} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainComponent;
