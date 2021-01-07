import React, { Component } from "react";
import { getTeamDetails } from "../../actions/teamActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from "react-style-tag";
import Skeleton from "@material-ui/lab/Skeleton";

class Teams extends Component {
  constructor() {
    super();
    this.state = {
      teamDetails: [],
    };
  }

  componentWillMount() {
    this.props.getTeamDetails(this.props.match.params.projectId);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log("next", nextProps);
    if (this.state.teamDetails !== nextProps.teams.teamDetails) {
      this.setState({
        teamDetails: nextProps.teams.teamDetails,
      });
    }
  }

  openNav = () => {
    document.querySelector(".teams").style.marginLeft = "10rem";
  };

  closeNav = () => {
    document.querySelector(".teams").style.margin = "0 2rem";
  };

  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "4rem auto",
          gridTemplateRows: "auto-fit",
          overflow: "hidden",
          gridGap: "10px",
          transition: "0.6s",
        }}
      >
        <nav
          className="navbar"
          id="nav"
          onMouseEnter={this.openNav}
          onMouseLeave={this.closeNav}
          style={{ overflow: "hidden", padding: "0px" }}
        >
          <ul className="navbar-nav" style={{ padding: "0" }}>
            <li className="logo">
              <Link
                to="/Dashboard"
                className="nav-link"
                style={{ padding: "0" }}
              >
                <span className="link-text logo-text">Carca</span>

                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="angle-double-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                      className="fa-secondary"
                    />
                    <path
                      fill="currentColor"
                      d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                      className="fa-primary"
                    />
                  </g>
                </svg>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard/editProfile"
                className="nav-link"
                style={{ padding: "0" }}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user"
                  className="svg-inline--fa fa-user fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352
                                               c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                      className="fa-secondary"
                    />
                  </g>
                </svg>
                <span className="link-text">Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-link"
                style={{ padding: "0" }}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="project-diagram"
                  className="svg-inline--fa fa-project-diagram fa-w-20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"
                      className="fa-secondary"
                    />
                  </g>
                </svg>
                <span className="link-text">Projects</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ideas" className="nav-link" style={{ padding: "0" }}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="lightbulb"
                  className="svg-inline--fa fa-lightbulb fa-w-11"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"
                      className="fa-secondary"
                    />
                  </g>
                </svg>
                <span className="link-text">Ideas</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/teams" className="nav-link" style={{ padding: "0" }}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="users"
                  className="svg-inline--fa fa-users fa-w-20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 650 512"
                >
                  <g className="fa-group">
                    <path
                      fill="currentColor"
                      d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                      className="fa-secondary"
                    />
                  </g>
                </svg>
                <span className="link-text">Team</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className="teams"
          style={{
            display: "grid",
            gridColumnStart: "2",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 400px))",
            gridTemplateRows: "auto-fit",
            gridGap: "40px",
            margin: "0 2rem",
            transition: "0.6s",
          }}
        >
          {this.state.teamDetails[0] ? (
            this.state.teamDetails[0].members.map((member) => {
              return (
                <div
                  className="card"
                  style={{
                    margin: "none",
                    borderRadius: "12px",
                    maxWidth: "600px",
                  }}
                >
                  <div className="card-content" style={{ transition: "0.6s" }}>
                    <span
                      style={{ textTransform: "uppercase" }}
                      className="card-title"
                    >
                      {member.userid.firstname}
                    </span>
                    <p>
                      This a simple description about the team or the project
                      they is working on. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Blanditiis deleniti, neque?
                      A, dicta error fugit impedit officia quasi tempora
                      tempore?
                    </p>
                  </div>
                  <div
                    className="card-action"
                    style={{
                      borderRadius: "12px",
                      transition: "0.6s",
                      display: "flex",
                    }}
                  ></div>
                  <style>{`
                  .card{
                    transition:0.6s !important;
                    }
                    
                  `}</style>
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </div>
          )}
        </div>
        <style>
          {`*{
                            box-sizing:border-box;
                        }
                        
                        :root {
                            font-size: 16px;
                            font-family: 'sans-serif';
                            --text-primary: #b6b6b6;
                            --text-secondary: #ececec;
                            --bg-primary: #23232e;
                            --bg-secondary: #141418;
                            --transition-speed: 600ms;
                        }
                        
                        body {
                            color: black;
                            background-color: #eceff1;
                            margin: 0;
                            padding: 0;
                        }
                        
                        body::-webkit-scrollbar {
                            width: 0.25rem;
                        }
                        
                        body::-webkit-scrollbar-track {
                            background: #1e1e24;
                        }
                        
                        body::-webkit-scrollbar-thumb {
                            background: orange;
                        }
                        
                          .dashboard{
                           display:grid;
                           grid-template-columns: 4rem auto 200px;   
                           overflow:hidden;
                           grid-gap:10px;
                        }
                         
                        .navbar {
                            position: fixed;
                            background-color: var(--bg-primary);
                            transition: width 600ms ease;
                            padding-left:0%; 
                        }
                        
                        .navbar-nav {
                            list-style: none;
                            padding: 0;
                            margin: 0;
                            display: flex;
                            flex-direction: column;
                            justify-content:start;
                           
                        }
                        .navbar-nav::-webkit-scrollbar{
                            width:0rem;
                        }
                        
                        
                        .nav-item {
                            width: 100%;
                            
                        }
                        
                        .nav-item:last-child {
                            margin-top: 0;
                        }
                        
                        .nav-link {
                            display: flex;
                            align-items: center;
                            height: 4rem;
                            color: var(--text-primary);
                            text-decoration: none;
                            filter: grayscale(100%) opacity(0.7);
                            transition: var(--transition-speed);
                        }
                        
                        .nav-link:hover {
                            filter: grayscale(0%) opacity(1);
                            background: var(--bg-secondary);
                            color: var(--text-secondary);
                        }
                        
                        .link-text {
                            display: none;
                            margin-left: 1rem;
                        }
                        
                        .nav-link svg {
                            width: 2rem;
                            min-width: 2rem;
                            margin: 0 1rem;
                        }
                        
                        .fa-primary {
                            color: orange;
                        }
                        
                        .fa-secondary {
                            color: orange;
                        }
                        
                        .fa-primary,
                        .fa-secondary {
                            transition: var(--transition-speed);
                        }
                        
                        .logo {
                            font-weight: bold;
                            text-transform: uppercase;
                            margin-bottom: 1rem;
                            text-align: center;
                            color: var(--text-secondary);
                            background: var(--bg-secondary);
                            font-size: 1.5rem;
                            letter-spacing: 0.3ch;
                            width: 100%;
                        }
                        
                        .logo svg {
                            transform: rotate(0deg);
                            transition: var(--transition-speed);
                        }
                        
                        .logo-text
                        {
                            display: inline;
                            position: absolute;
                            left: -999px;
                            transition: var(--transition-speed);
                        }
                        
                        .navbar:hover .logo svg {
                            transform: rotate(-180deg);
                        }
                        
                        /* Small screens */
                        @media only screen and (max-width: 600px) {
                            .dashboard{
                              display:grid;
                              grid-template-columns:4rem auto 0;
                              grid-template-rows:auto 4rem 0;
                              }
                        
                            .navbar {
                                top: 0;
                                width: 4rem;
                                height: 100vh;
                            }
                      
                            .navbar-nav {   
                                display:flex;
                                flex-direction: column;
                                justify-content:center;                            
                            }
                            .navbar:hover {
                                width: 14rem;
                            }
                            
                        
                            .nav-link:hover {
                                justify-content: center;
                                transition:0.6s ease in;
                            }   
                            .navbar:hover .link-text {
                                display: inline;
                            }
                             .navbar:hover .logo svg
                            {
                                margin-left: 11rem;
                            }
                        
                            .navbar:hover .logo-text
                            {
                                left: 0px;
                            }
                        }
                        
                        /* Large screens */
                        @media only screen and (min-width: 600px) {
                            .navbar {
                                top: 0;
                                width: 4rem;
                                height: 100vh;
                            }
                        
                            .navbar:hover {
                                width: 14rem;
                            }
                        
                            .navbar:hover .link-text {
                                display: inline;
                                color:#fff;
                            }
                              
                            
                            .navbar:hover .logo svg
                            {
                                margin-left: 11rem;
                            }
                        
                            .navbar:hover .logo-text
                            {
                                left: 0px;
                            }
                        }
                        
                        .dark {
                            --text-primary: #b6b6b6;
                            --text-secondary: #ececec;
                            --bg-primary: #23232e;
                            --bg-secondary: #141418;
                        }
                        
                        .light {
                            --text-primary: #1f1f1f;
                            --text-secondary: #000000;
                            --bg-primary: #ffffff;
                            --bg-secondary: #e4e4e4;
                        }
                        
                        .solar {
                            --text-primary: #576e75;
                            --text-secondary: #35535c;
                            --bg-primary: #fdf6e3;
                            --bg-secondary: #f5e5b8;
                        }
                        
                        .theme-icon {
                            display: none;
                        }
                        
                        .dark #darkIcon {
                            display: block;
                        }
                        
                        .light #lightIcon {
                            display: block;
                        }
                        
                        .solar #solarIcon {
                            display: block;
                        }
              
              `}
        </style>
      </div>
    );
  }
}

Teams.propTypes = {
  auth: PropTypes.object.isRequired,
  teams: PropTypes.object.isRequired,
  getTeamDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  teams: state.teams,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getTeamDetails,
})(Teams);
