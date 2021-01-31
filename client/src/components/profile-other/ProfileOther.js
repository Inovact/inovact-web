import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../actions/userActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import { Style } from 'react-style-tag';
import axios from 'axios';
import { Button as Btn } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { MuiThemeProvider } from '@material-ui/core';
import NavbarHome from '../layout/Navbar';
import ScrollableTabsButtonPrevent from './ContentTab';

const orangeTheme = createMuiTheme({
  palette: { primary: orange, secondary: orange },
});

const baseURL = 'https://inovact.herokuapp.com';

class ProfileOther extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: [],
      ideas: [],
      teams: [],
      projects: [],
      userExists: false,
    };
  }

  componentWillMount() {
    this.props.getUser(this.props.match.params.userId);
  }

  componentDidMount = async () => {
    M.Tabs.init(this.Tabs);
    await axios
      .get(`${baseURL}/api/ideas/otherideas/${this.props.match.params.userId}`)
      .then((response) => {
        this.setState({ ideas: response.data });
        console.log(response.data);
      });
    await axios
      .get(`${baseURL}/api/teams/getteams/${this.props.match.params.userId}`)
      .then((response) => {
        this.setState({ teams: response.data });
        console.log('teams', response.data);
      });
  };

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps);
    if (
      this.props.userDetails.userDetails !== nextProps.userDetails.userDetails
    ) {
      this.setState({
        userDetails: nextProps.userDetails.userDetails,
      });
      this.setState({
        projects: nextProps.userDetails.userDetails.project,
      });
      if (nextProps.userDetails.userExists) {
        this.setState({
          userExists: nextProps.userDetails.userExists,
        });
      }
    }
  }
  likeProject = (id) => {
    console.log(id);
    const postId = {
      postId: id,
    };
    axios
      .put('/api/projects/like', postId)
      .then((result) => {
        console.log(result);
        const newData = this.state.projects.map((item) => {
          if (item._id === result.data._id) {
            return result.data;
          } else {
            return item;
          }
        });
        this.setState({
          projects: newData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  unlikeProject = (id) => {
    console.log(id);
    const postId = {
      postId: id,
    };
    axios
      .put('/api/projects/unlike', postId)
      .then((result) => {
        console.log(result);
        const newData = this.state.projects.map((item) => {
          if (item._id === result.data._id) {
            return result.data;
          } else {
            return item;
          }
        });
        this.setState({
          projects: newData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  commentProject = (text, postId) => {
    const comment = {
      text: text,
      postId: postId,
    };
    axios
      .put('/api/projects/comment', comment)
      .then((result) => {
        const newData = this.state.projects.map((item) => {
          if (item._id === result.data._id) {
            return result.data;
          } else {
            return item;
          }
        });
        this.setState({
          projects: newData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  followUser = (id) => {
    console.log(id);
    const followId = {
      followId: id,
    };
    axios.put('/api/user/follow', followId).then((result) => {
      console.log(result.data);
      this.props.getUser(id);
    });
  };

  unfollowUser = (id) => {
    const unfollowId = {
      unfollowId: id,
    };
    axios.put('/api/user/unfollow', unfollowId).then((result) => {
      console.log(result.data);
      this.props.getUser(id);
    });
  };
  openNav = () => {
    document.querySelector('.feed').style.marginLeft = '8rem';
  };

  closeNav = () => {
    document.querySelector('.feed').style.marginLeft = '0';
  };

  render() {
    if (this.state.userExists) {
      return (
        <div>
          <div>
            <NavbarHome />
          </div>
          <div
            className='dashboard'
            style={{ marginTop: '60px', overflow: 'hidden' }}
          >
            <nav
              className='navbar'
              id='nav'
              onMouseEnter={this.openNav}
              onMouseLeave={this.closeNav}
              style={{ overflow: 'hidden', zIndex: '1', padding: '0px' }}
            >
              <ul className='navbar-nav' style={{ padding: '0' }}>
                <li className='logo' style={{ height: '3rem' }}>
                  <Link
                    to='/Dashboard'
                    className='nav-link'
                    style={{ padding: '0' }}
                  >
                    <span className='link-text logo-text'>Carca</span>

                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fad'
                      data-icon='angle-double-right'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                      className='svg-inline--fa fa-angle-double-right fa-w-14 fa-5x'
                    >
                      <g className='fa-group'>
                        <path
                          fill='currentColor'
                          d='M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z'
                          className='fa-secondary'
                        />
                        <path
                          fill='currentColor'
                          d='M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z'
                          className='fa-primary'
                        />
                      </g>
                    </svg>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/dashboard/editProfile'
                    className='nav-link'
                    style={{ padding: '0' }}
                  >
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='far'
                      data-icon='user'
                      className='svg-inline--fa fa-user fa-w-14'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      <path
                        fill='currentColor'
                        d='M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z'
                        className='fa-secondary'
                      />
                    </svg>
                    <span className='link-text'>Profile</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/projects'
                    className='nav-link'
                    style={{ padding: '0' }}
                  >
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='far'
                      data-icon='project-diagram'
                      className='svg-inline--far fa-project-diagram fa-w-20'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 640 512'
                    >
                      <g className='fa-group'>
                        <path
                          fill='currentColor'
                          d='M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z'
                          className='fa-secondary'
                        />
                      </g>
                    </svg>
                    <span className='link-text'>Projects</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/ideas'
                    className='nav-link'
                    style={{ padding: '0' }}
                  >
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='far'
                      data-icon='lightbulb'
                      className='svg-inline--fa fa-lightbulb fa-w-11'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      <g className='fa-group'>
                        <path
                          fill='currentColor'
                          d='M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z'
                          className='fa-secondary'
                        />
                      </g>
                    </svg>
                    <span className='link-text'>Ideas</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/teams'
                    className='nav-link'
                    style={{ padding: '0' }}
                  >
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='far'
                      data-icon='user'
                      className='svg-inline--fa fa-user fa-w-14'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      <path
                        fill='currentColor'
                        d='M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z'
                        className='fa-secondary'
                      />
                    </svg>
                    <span className='link-text'>Team</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/teams'
                    className='nav-link'
                    style={{ padding: '0' }}
                  >
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='cog'
                      className='svg-inline--fa fa-cog fa-w-16'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z'
                        className='fa-secondary'
                      />
                    </svg>
                    <span className='link-text'>Settings</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className='feed' style={{ margin: '0', padding: '0px' }}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  margin: '18px 0px',
                  transition: '0.6s',
                  padding: '10px',
                }}
              >
                <div style={{ margin: '0 20px', transition: '0.6s' }}>
                  <img
                    style={{
                      width: '160px',
                      height: '160px',
                      borderRadius: '50%',
                    }}
                    alt=''
                    src='https://i.pinimg.com/originals/d3/69/70/d36970b0526f5ffeb0fdc4dc1e8f1284.jpg'
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignContent: 'start',
                    transition: '0.3s',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'column',
                    }}
                  >
                    <h4
                      style={{
                        fontWeight: '600',
                        textTransform: 'lowercase',
                        fontFamily: 'sans-serif',
                        fontSize: '18px',
                        textAlign: 'left',
                      }}
                    >
                      {this.state.userDetails.user.firstname}
                      <span> </span>
                      {this.state.userDetails.user.lastname}
                    </h4>
                    <Link to={this.state.userDetails.user.email}>
                      <p
                        style={{
                          margin: '0 auto',
                          color: '#9e9e9e',
                          textAlign: 'left',
                          fontFamily: 'poppins',
                          fontSize: '16px',
                        }}
                      >
                        {this.state.userDetails.user.email}
                      </p>
                    </Link>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'row',
                      marginTop: '10px',
                      marginBottom: '10px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        marginRight: '5px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '18px',
                          fontWeight: '500',
                          marginRight: '2px',
                        }}
                      >
                        {this.state.projects.length}
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'rgba(0,0,0,0.4)',
                          alignContent: 'center',
                          padding: '4px 4px',
                        }}
                      >
                        Projects
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        marginRight: '5px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '18px',
                          fontWeight: '500',
                          marginRight: '2px',
                        }}
                      >
                        10
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'rgba(0,0,0,0.4)',
                          alignContent: 'center',
                          padding: '4px 4px',
                        }}
                      >
                        Ideas
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        marginRight: '5px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '18px',
                          fontWeight: '500',
                          marginRight: '2px',
                        }}
                      >
                        {this.state.userDetails.user.followers.length}
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'rgba(0,0,0,0.4)',
                          alignContent: 'center',
                          padding: '4px 4px',
                        }}
                      >
                        Followers
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        marginRight: '5px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '18px',
                          fontWeight: '500',
                          marginRight: '2px',
                        }}
                      >
                        {this.state.userDetails.user.following.length}
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: 'rgba(0,0,0,0.4)',
                          alignContent: 'center',
                          padding: '4px 4px',
                        }}
                      >
                        Following
                      </span>
                    </div>
                  </div>
                  <div style={{ maxWidth: '600px' }}>
                    <p style={{ margin: '0 auto' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Asperiores consequuntur est fugit nemo nobis possimus
                      quasi rem sit.
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      marginTop: '10px',
                    }}
                  >
                    {this.state.userDetails.user.followers.includes(
                      this.props.auth.user.id
                    ) ? (
                      <MuiThemeProvider theme={orangeTheme}>
                        <Btn
                          style={{
                            backgroundColor: '#fff',
                            color: '#336699',
                            padding: '6px 8px',
                            fontWeight: '600',
                            fontSize: '12px',
                          }}
                          color='primary'
                          variant='contained'
                          onClick={() =>
                            this.unfollowUser(this.state.userDetails.user._id)
                          }
                        >
                          unFollow
                        </Btn>
                      </MuiThemeProvider>
                    ) : (
                      <MuiThemeProvider theme={orangeTheme}>
                        <Btn
                          style={{
                            backgroundColor: '#5f99cf',
                            color: '#fff',
                            fontSize: '12px',
                            fontWeight: '600',
                          }}
                          color='secondary'
                          variant='contained'
                          onClick={() =>
                            this.followUser(this.state.userDetails.user._id)
                          }
                        >
                          Follow
                        </Btn>
                      </MuiThemeProvider>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <ScrollableTabsButtonPrevent
                  teams={this.state.teams}
                  ideas={this.state.ideas}
                  projects={this.state.projects}
                  user={this.props.auth.user}
                />
              </div>
            </div>
          </div>
          <Style>
            {`
                        
                        
                        :root {
                          font-size: 14px;
                          font-family: 'sans-serif';
                          --text-primary: #fff;
                          --text-secondary: #222;
                          --bg-primary: #f5f8fa;
                          --bg-secondary: #fff;
                          --transition-speed: 600ms;
                        }
                        
                        body {
                            color: black;
                            background-color: #f5f8fa;
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
                        
                         
                         
                        .navbar {
                            position: fixed;
                            background-color: var(--bg-primary);
                            transition: width 600ms ease;
                            padding-left:0%; 
                            box-shadow:none;
                        }
                        
                        .navbar-nav {
                            list-style: none;
                            padding: 0;
                            margin: 0;
                            display: flex;
                            flex-direction: column;
                            align-items:center;
                            height:100%                           
                        }
                        .navbar-nav::-webkit-scrollbar{
                            width:0rem;
                        }
                        
                        
                        .nav-item {
                            width: 100%;
                            margin-top:4px;
                     }
                        
                        .nav-item:last-child {
                            margin-top: auto;
                        }
                        
                        .nav-link {
                            display: flex;
                            align-items: center;
                            height: 4rem;
                            color: var(--text-primary);
                            text-decoration: none;
                            transition: var(--transition-speed);
                        }
                        
                        .nav-link:hover .link-text {
                            filter: grayscale(0%) opacity(1);
                            background: var(--bg-secondary);
                            color: #336699;
                        }
                         .nav-link:hover{
                            filter: grayscale(0%) opacity(1);
                            background: var(--bg-secondary);
                            color: #fff;
                        }
                        
                        .link-text {
                            display: none;
                            margin-left: 1rem;
                            color:#222;
                            font-weight:500;
                            height:4rem;
                            transition:0.6s;
                        }
                        
                        .nav-link svg {
                            width: 1.5rem;
                            min-width: 1.5rem;
                            margin-right:1rem;
                            margin-left:1.2rem;
                        }
                        
                        .fa-primary {
                            color: #f0f0f0;
                        }
                        
                        .fa-secondary {
                            color: #ff4500;
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
                              grid-template-columns:0 auto !important;
                              grid-template-rows:auto 3rem;
                              }
                        
                            .navbar {
                                bottom:0;   
                                width: 100vw;
                                height: 4rem;
                                transition:0.6s;

                            }
                      
                            .navbar-nav {   
                                display:flex;
                                flex-direction: row;
                                justify-content:center;                            
                            }
                            .nav-link {
                                justify-content: center;
                                transition:0.6s ease in;
                                
                            }   
                            
                    
                            
                             .navbar .logo
                            {
                                display: none;
                            }
                        }
                        
                        /* Large screens */
                        @media only screen and (min-width: 600px) {
                         .dashboard{
                           display:grid;
                           grid-template-columns: 3rem auto;   
                           grid-gap:10px;
                        }
                            .navbar {
                                top: 0;
                                width: 3.5rem;
                                height: 100vh;
                                transition:0.6s;
                            }
                        
                            .navbar:hover {
                                width: 12rem;
                                transition:0.6s;
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
                        
                        .feed{
                            grid-column-start: 2;
                            border-radius:10px;
                            background:#fff;
                            transition:600ms ;
                            padding:16px;
                            height:100%;
                        }
                        
                        
                       .profile {
                            background: #fff;
                            overflow: hidden;
                            border-radius: 10px;
                            margin-top: 1%;
                            transition:600ms ;

                        }
                        
                       .profile:hover{
                           box-shadow:0 2px 8px 0 rgba(0,0,0,0.3);
                           transition:0.6s;
                       }
                        
                       .contain {
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                            flex-direction: column;
                            max-width: 200px;
                            margin-top: 4%;
                            transition: 0.5s;
                            overflow: hidden;
                            height: 100%;
                        }
                        
                       .contain .heading {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            height: 100px;
                            margin-left: 4%;
                            margin-right: 4%;
                            margin-bottom: 5%;
                            text-align: left;
                            overflow: hidden;
                            border-bottom: 1px solid grey;
                        }
                         
                     
                        
                       .contain .heading .name {
                            text-align: left;
                            justify-content: center;
                            width:100%;
                            height:60px;    
                            
                        }
                        
                       .contain .heading .name span #h1{
                            font-family: sans-serif;
                            text-align: left;
                        }
                        
                       .contain .heading .name #h2 {
                            font-family: sans-serif;
                            margin-top: 5px;
                            font-weight: 600;
                            font-size:16px;
                            text-transform:capitalize;
                        }
                        
                       .contain .details {
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;
                            justify-content: space-around;
                            height: 200px;
                            transition:0.5s;
                        }
                        
                       .contain .details .projects {
                            display:flex;
                            flex-direction:column;
                            justify-content:space-between;
                            padding: 2%;
                            margin-top: 2%;
                            margin-bottom: 2%;
                            border-radius: 15px;
                            text-align: center;
                            width: 90px;
                            transition:0.5s;
                        }
                        
                       .contain .details .projects .p1   {
                            text-align: left;
                            font-family: sans-serif;
                            color: grey;
                            font-size: 12px;
                            font-weight:400;
                        }
                        
                       .contain .details .projects .p2{
                            font-family: sans-serif;
                            font-weight: 600;
                            font-size: 20px;
                        }
                        
                        
                       .contain .activity {
                            margin-top: 10%;
                            display: flex;
                            flex-direction: column;
                            padding-left: 5%;
                            text-align: left;
                        }
                        
                       .contain  .activity  .a1  {
                            font-family: sans-serif;
                            font-size: 18px;
                            margin-bottom: 1%;
                        }
                        
                       .contain  .activity  .a2 {
                            font-family: sans-serif;
                            margin: 0;
                            font-weight: bold;
                        
                        }
                        
                        @media only screen and (max-width: 600px) {
                            .profile{
                                display:none;
                            }
                          
                        }   
                       
                        
                        `}
          </Style>
        </div>
      );
    } else {
      return (
        <div
          className='progress'
          style={{ width: '500px ', margin: '0 auto', background: '#eee' }}
        >
          <div
            className='indeterminate'
            style={{ width: '500px', background: 'orange' }}
          />
        </div>
      );
    }
  }
}

ProfileOther.propTypes = {
  userDetails: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  userDetails: state.userDetails,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getUser,
})(withRouter(ProfileOther));
