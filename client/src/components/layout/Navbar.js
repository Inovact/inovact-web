import React, { Component } from 'react';
import { logoutUser } from '../../actions/authActions';
import style from 'react-style-tag';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Badge,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import {
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      toggled: false,
      userSearch: '',
      searchedUsers: [],
    };
  }
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  dialogOpen = () => {
    this.setState({
      toggled: true,
    });
  };

  dialogClose = (todo) => {
    this.setState({ userSearch: '' });
    if (todo === 'cancel' || todo === 'close') {
      this.setState({
        toggled: false,
      });
    }
  };

  fetchUsers = (query) => {
    this.setState({
      userSearch: query,
    });
    console.log('q', this.state.userSearch);
    const users = {
      query: query,
    };
    axios.post('/api/users/search-users', users).then((result) => {
      console.log(result.data);
      this.setState({
        searchedUsers: result.data,
      });
    });
  };
  render() {
    return (
      <div>
        <div>
          <div className='nav'>
            <input type='checkbox' id='nav-check' />
            <div className='nav-header'>
              <div className='nav-title'>
                <Link style={{ color: '#336699' }} to='/dashboard'>
                  Inovact
                </Link>
              </div>
            </div>
            <div className='nav-btn'>
              <label htmlFor='nav-check'>
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <div className='nav-links'>
              <span>
                <Tooltip title='search user' style={{ color: 'red' }}>
                  <IconButton
                    aria-label='search'
                    onClick={this.dialogOpen}
                    style={{ background: '#fff' }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
                <Dialog
                  open={this.state.toggled}
                  onClose={() => this.dialogClose('close')}
                  aria-labelledby='alert-dialog-title'
                  aria-describedby='alert-dialog-description'
                >
                  <DialogTitle id='alert-dialog-title'>
                    {'Search a Carca User'}
                  </DialogTitle>
                  <DialogContent>
                    <input
                      className='search-u'
                      placeholder='Enter Users Name'
                      value={this.state.userSearch}
                      onChange={(event) => {
                        this.fetchUsers(event.target.value);
                      }}
                    />

                    <List style={{ transition: '0.5s' }}>
                      {this.state.searchedUsers ? (
                        this.state.searchedUsers.map((users) => {
                          return (
                            <div>
                              <ListItem>
                                <ListItemAvatar>
                                  <Avatar src={users.profilePic} />
                                </ListItemAvatar>
                                <Link to={'/profileOther/' + users._id}>
                                  <ListItemText
                                    primary={users.firstname}
                                    secondary={users.email}
                                  />
                                </Link>
                              </ListItem>
                              <Divider variant='inset' component='li' />
                            </div>
                          );
                        })
                      ) : (
                        <p>User not found</p>
                      )}
                    </List>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => this.dialogClose('cancel')}
                      color='primary'
                    >
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
              </span>
              <form className='search-form' style={{ margin: '0' }}>
                <input
                  type='text'
                  className='search-bar search-c'
                  style={{ height: '30px', margin: '0' }}
                  placeholder='search'
                />
                <style>{`
                      
                      .search-c:focus{
                            border-bottom:1px solid #ff4500 !important;
                            box-shadow:0 1px 0 0 #ff4500 !important;
                            }
                      
                      .search-u{
                            min-width:500px;
                          }
                      @media (max-width:600px){
                            .search-u{
                            min-width:100%;
                          }
                          }
                      
                      .search-u:focus{
                      border-bottom:1px solid #ff4500 !important;
                      box-shadow:0 1px 0 0 #ff4500 !important;
                      }
                      `}</style>
              </form>
              <style>{`
                .search-form{
                  margin: 2%;
                  justify-content: center;
                  display: flex;
                  padding:0px 10px;
                }
                
                .search-bar{
                 border: 2px solid #ccc;
                  border-radius: 4px;
                  font-size: 18px;
                  background-size: 20px;
                  background-color: white;
                  background-position: 10px 10px;
                  background-repeat: no-repeat;
                  /* padding: 10px 12px 40px; */
                  padding-top: 20px;
                  padding-bottom: 20px;
                  padding-left: 40px;
                  -webkit-transition: width 1s ease-in-out;
                
                  transition: width 1s ease-in-out;
                  
                }
                .search-bar:focus{
                  width: 100%;
                  box-shadow: 0px 2px 8px 0px gray;
                }
                
                .MuiIconButton-root{
                  padding:8px;
                    }
                `}</style>

              <span>
                <Badge badgeContent={4} style={{ color: 'red' }}>
                  <NotificationsIcon style={{ color: '#222' }} />
                </Badge>
              </span>
              <span>
                <Badge badgeContent={4} style={{ color: 'red' }}>
                  <MailIcon style={{ color: '#222' }} />
                </Badge>
              </span>
              <span style={{ marginTop: '3px' }}>
                <i
                  style={{ fontSize: '22px', paddingRight: '10px' }}
                  onClick={this.onLogoutClick}
                  className='fa fa-sign-out'
                />
              </span>
            </div>
          </div>
        </div>
        <style>
          {`
                 .nav {
                  height: 50px;
                  width: 100%;
                  background-color: #f5f8fa;
                  position: fixed;
                  z-index:2;
                  top:0;  
                  box-shadow:0 1px 2px 0 rgba(0,0,0,0.2);
                 
                }
                
                .nav > .nav-header {
                  display: inline;
                }
                
                .nav > .nav-header > .nav-title {
                  display: inline-block;
                  font-size: 22px;
                  color: #222;
                  padding: 10px ;
                }
                
                .nav > .nav-btn {
                  display: none;
                }
                
                .nav > .nav-links {
                  display: flex;
                  flex-direction:row;
                  float: right;
                  font-size: 18px;
                  padding-top:8px;
                  height:50px;
                }
                
                .nav > .nav-links > a {
                  padding:8px 10px ;
                  text-decoration: none;
                  color: #222;
                }
                 .nav > .nav-links > span  {
                  height:30px;
                  text-decoration: none;
                  padding:0 10px;
                  color: #222;
                }
                
                .nav > .nav-links > a:hover {
                  color: rgba(0, 0, 0, 0.6) !important;
                  transition:0.6s;
                  text-decoration:underline ;
                }
                
                .nav > #nav-check {
                  display: none;
                }
                
                @media (max-width:600px) {
                  .nav > .nav-btn {
                    display: inline-block;
                    position: absolute;
                    right: 0px;
                    top: 0px;
                  }
                  .nav > .nav-btn > label {
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    padding: 13px;
                  }
                  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
                    background-color: rgba(0, 0, 0, 0.3);
                  }
                  .nav > .nav-btn > label > span {
                    display: block;
                    width: 25px;
                    height: 10px;
                    border-top: 2px solid #222;
                  }
                  .nav > .nav-links {
                    position: absolute;
                    display: flex;
                    flex-direction:column;
                    width: 100%;
                    background-color: #fff;
                    height: 0px;
                    padding:0px 10px !important;
                   
                    transition: all 0.3s ease-in;
                    overflow-y: hidden;
                    top: 50px;
                    left: 0px;
                  }
                 
                  .nav > .nav-links > a {
                    display: block;
                    width: 100%;
                  }
                  .nav > .nav-links > i {
                    display: block;
                    width: 100%;
                    padding:0 10px;
                    font-size:20px;
                  }
                  .nav > #nav-check:not(:checked) ~ .nav-links {
                    height: 0px;
                  }
                  .nav > #nav-check:checked ~ .nav-links {
                    height: calc(100vh - 75vh);
                    overflow-y: auto;
                    transition:0.5s;
                    overflow:hidden;
                    box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);
                  }
                }


                    `}
        </style>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { logoutUser })(Navbar);
