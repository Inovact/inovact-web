import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from 'react-style-tag';
import Container from './ProjectModal/Container';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  postProject,
  userProject,
  deleteProject,
} from '../../actions/projectActions';
import Collapsible from 'react-collapsible';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Tooltip } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import M from 'materialize-css';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import afterClap from '../../static/afterClap.svg';
import comment from '../../static/comment.svg';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavbarHome from '../layout/Navbar';
class Projects extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      status: [
        { id: 1, value: 'complete' },
        { id: 2, value: 'incomplete' },
        { id: 3, value: 'inprogress' },
      ],
      file: {},
      tags: [],
      projects: [],
      postSuccess: false,
      projectExists: false,
      toggled: false,
    };
  }

  componentWillMount() {
    this.props.userProject();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.state.projects !== nextProps.projects.projects) {
      this.setState({
        projects: nextProps.projects.projects,
      });
    }
    if (this.state.postSuccess !== nextProps.projects.postSuccess) {
      this.setState({
        postSuccess: nextProps.projects.postSuccess,
        projects: nextProps.projects.projects,
      });
      M.toast({ html: 'Posted Successfully' });
      window.location.reload();
    }
    if (nextProps.projects.projectExists) {
      this.setState({
        projectExists: nextProps.projects.projectExists,
      });
    }
  }
  openNav = () => {
    document.querySelector('.projects').style.marginLeft = '8rem';
  };

  closeNav = () => {
    document.querySelector('.projects').style.margin = '0';
  };

  dialogOpen = () => {
    this.setState({
      toggled: true,
    });
  };

  dialogClose = (todo) => {
    console.log(todo);
    if (todo === 'cancel' || todo === 'close') {
      this.setState({
        toggled: false,
      });
    } else {
      this.props.deleteProject(todo);
      this.setState({
        toggled: false,
      });
      window.location.reload();
    }
  };

  render() {
    const triggerText = 'Create Project';
    const onSubmit = (event) => {
      event.preventDefault(event);
      const data = new FormData();

      const title = event.target.title.value;
      const description = event.target.description.value;
      const status = event.target.status.value;
      const tags = event.target.tags.value;

      const file = [];

      for (let i in event.target.file[0].files) {
        console.log(typeof i);
        file.push(event.target.file[0].files[i]);
      }

      file.splice(-1, 2);
      file.splice(file.length - 1, 1);

      console.log({ file });
      data.append('title', title);
      data.append('description', description);
      data.append('status', status);
      data.append('tags', tags);

      for (let j in file) {
        data.append('file', file[j]);
      }

      this.props.postProject(data);
      this.props.userProject();
    };

    return (
      <div>
        <NavbarHome />
        <div className='project-submit' style={{ marginTop: '60px' }}>
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
                <Link to='/ideas' className='nav-link' style={{ padding: '0' }}>
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
                <Link to='/teams' className='nav-link' style={{ padding: '0' }}>
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
                <Link to='/teams' className='nav-link' style={{ padding: '0' }}>
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
          {this.state.projectExists ? (
            <div
              className='projects'
              style={{
                display: 'grid',
                gridColumnStart: '2',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 500px))',
                gridGap: '40px',
                transition: '0.6s',
                width: '100%',
                height: '100%',
                padding: '16px',
                background: '#fff',
                borderRadius: '12px',
              }}
            >
              {this.state.projects.map((project) => (
                <div
                  className='card'
                  style={{
                    boxShadow: '8px 4px 16px 0 rgba(0,0,0,0.2)',
                    borderRadius: '12px',
                  }}
                >
                  <div
                    className='card-image waves-effect waves-block waves-light'
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px',
                    }}
                  >
                    <div style={{ display: 'flex' }}>
                      <Avatar
                        style={{
                          marginTop: '5px',
                          marginLeft: '10px',
                        }}
                      >
                        A
                      </Avatar>
                      <Link
                        to={
                          project.userId._id !== this.props.auth.user.id
                            ? '/profileOther/' + project.userId._id
                            : '/projects'
                        }
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginLeft: '1rem',
                          textDecoration: 'none',
                        }}
                      >
                        <span>
                          <Tooltip
                            title={
                              <React.Fragment>
                                <Typography color='inherit'>
                                  Tooltip with HTML
                                </Typography>
                                <h6>{project.userId.firstname}</h6>
                              </React.Fragment>
                            }
                            plac
                            placement='top'
                          >
                            <span
                              style={{
                                fontWeight: '300',
                                fontFamily: 'sans serif',
                                color: '#222',
                              }}
                            >
                              {project.userId.firstname}
                            </span>
                          </Tooltip>
                        </span>
                        <span style={{ fontSize: '12px', color: 'grey' }}>
                          {new Intl.DateTimeFormat('en-GB', {
                            month: 'long',
                            day: '2-digit',
                            year: 'numeric',
                          }).format(new Date(project.creationDate))}
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Tooltip title='Delete Project' style={{ color: 'red' }}>
                        <IconButton
                          aria-label='delete'
                          onClick={this.dialogOpen}
                          style={{ background: '#fff' }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      <Dialog
                        open={this.state.toggled}
                        onClose={() => this.dialogClose('close')}
                        aria-labelledby='alert-dialog-title'
                        aria-describedby='alert-dialog-description'
                      >
                        <DialogTitle id='alert-dialog-title'>
                          {'Delete Project?'}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id='alert-dialog-description'>
                            Do you want to delete this project and all its
                            content and the team associated with it?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={() => this.dialogClose('cancel')}
                            color='primary'
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={() => this.dialogClose(project._id)}
                            style={{ background: 'red', color: '#fff' }}
                            autoFocus
                          >
                            Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </div>
                  <div className='card-content' style={{ paddingTop: '5px' }}>
                    <span
                      style={{ textTransform: 'capitalize' }}
                      className='card-title activator grey-text text-darken-4'
                    >
                      {project.title}
                      <i className='material-icons right'>more_vert</i>
                    </span>
                    <div
                      className='description'
                      style={{ marginBottom: '1rem' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Adipisci architecto culpa eligendi esse et eum fuga iusto
                      molestiae perspiciatis recusandae.
                    </div>
                    <div>
                      {JSON.parse(project.tags).map((tag) => {
                        return (
                          <Chip
                            size='small'
                            avatar={
                              <Avatar
                                style={{
                                  textTransform: 'capitalize',
                                  background: '#336699',
                                  color: '#fff',
                                }}
                              >
                                {tag.slice(0, 1)}
                              </Avatar>
                            }
                            style={{
                              marginRight: '5px',
                              background: '#cee3f8',
                            }}
                            label={tag.slice(0, -1)}
                          />
                        );
                      })}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        transition: '0.6s ease out',
                        marginTop: '0.5rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <div style={{ transition: '0.6s ease out' }}>
                        <img
                          alt=''
                          className='up'
                          style={{ width: '28px', marginBottom: '-5px' }}
                          src={afterClap}
                          onClick={() => {
                            this.unlikeProject(project._id);
                          }}
                        />
                        <span
                          style={{
                            marginLeft: '2px',
                            fontFamily: 'sans serif',
                            fontSize: '18px',
                          }}
                        >
                          {project.likes.length}
                        </span>
                      </div>
                      <Collapsible
                        style={{ transition: '0.6s' }}
                        className='comments'
                        trigger={
                          <img
                            id='comment'
                            src={comment}
                            style={{
                              width: '21px',
                              marginLeft: '10px',
                              marginBottom: '-10px',
                            }}
                            alt='comments'
                          />
                        }
                      >
                        {project.comments.map((record) => {
                          return (
                            <div style={{ display: 'flex' }}>
                              <div style={{ margin: '0.5rem' }}>
                                <span>
                                  <img
                                    style={{
                                      width: '20px',
                                      height: '20px',
                                      borderRadius: '50%',
                                    }}
                                    alt=''
                                    src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/115909667/original/7d79dd80b9eecaa289de1bc8065ad44aa03e2daf/do-a-simple-but-cool-profile-pic-or-logo-for-u.jpeg'
                                  />
                                </span>
                                <p
                                  style={{
                                    fontSize: '12px',
                                    fontFamily: 'poppins',
                                    textTransform: 'lowercase',
                                  }}
                                >
                                  {record.postedBy.firstname}
                                </p>
                              </div>
                              <p style={{ padding: '5px 10px' }}>
                                {record.text}
                              </p>
                            </div>
                          );
                        })}
                      </Collapsible>
                      <style>
                        {`
                          #comment:hover{
                            filter:drop-shadow(1px 2px 2px rgba(0,0,0,0.5))
                           }
                           .up:hover{
                           filter:drop-shadow(1px 2px 2px rgba(0,0,0,0.3))
                            }
                            
                          `}
                      </style>
                    </div>
                    <div style={{ height: '40px' }}>
                      {project.comments.length ? (
                        <div style={{ display: 'flex' }}>
                          <div style={{ margin: '0.2rem' }}>
                            <span>
                              <img
                                alt=''
                                style={{
                                  width: '22px',
                                  height: '22px',
                                  borderRadius: '50%',
                                  backgroundSize: 'fit',
                                }}
                                src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/115909667/original/7d79dd80b9eecaa289de1bc8065ad44aa03e2daf/do-a-simple-but-cool-profile-pic-or-logo-for-u.jpeg'
                              />
                            </span>
                            <p
                              style={{
                                fontSize: '12px',
                                fontFamily: 'poppins',
                                textTransform: 'lowercase',
                              }}
                            >
                              {project.comments[0].postedBy.firstname}
                            </p>
                          </div>
                          <p style={{ padding: '3px 10px' }}>
                            {project.comments[0].text}
                          </p>
                        </div>
                      ) : (
                        <p>no comments yet</p>
                      )}
                    </div>
                  </div>
                  <div
                    style={{ transition: '0.6s ease ' }}
                    className='card-reveal'
                  >
                    <div>
                      <span
                        className='card-title grey-text text-darken-4'
                        style={{ textTransform: 'capitalize' }}
                      >
                        {project.title}
                        <i className='material-icons right'>close</i>
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Exercitationem in incidunt ipsa. Aspernatur atque
                        dolorum fugit nulla optio placeat, praesentium sunt!
                        Accusamus accusantium amet atque commodi consequatur
                        culpa cumque debitis dolorum ea impedit inventore iusto,
                        molestiae nulla omnis possimus quas quis, rem
                        reprehenderit sapiente sequi, sint soluta temporibus
                        ullam vero voluptate! Accusamus assumenda perspiciatis.
                      </p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'Center',
                        }}
                      >
                        <AvatarGroup max={3}>
                          <Avatar
                            alt='Remy Sharp'
                            src='/static/images/avatar/1.jpg'
                          />
                          <Avatar
                            alt='Travis Howard'
                            src='/static/images/avatar/2.jpg'
                          />
                          <Avatar
                            alt='Cindy Baker'
                            src='/static/images/avatar/3.jpg'
                          />
                          <Avatar
                            alt='Trevor Henderson'
                            src='/static/images/avatar/5.jpg'
                          />
                        </AvatarGroup>
                        <Link
                          style={{ textAlign: 'center', color: '#ff1f5a' }}
                          to={'/TeamDetails/' + project._id}
                        >
                          Team Details
                        </Link>
                      </div>
                      <Tooltip title='Request Join' placement='top' arrow>
                        <Fab
                          style={{ color: 'white', background: 'orange' }}
                          size='small'
                          onClick={() => this.requestjoin(project._id)}
                        >
                          <AddIcon />
                        </Fab>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ alignContent: 'bottom' }}>
                <Container
                  style={{ margin: '0 auto' }}
                  triggerText={triggerText}
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          ) : (
            <div className='projects'>
              <div
                style={{
                  maxWidth: '600px',
                  height: '100px',
                  background: '#f5f5f5',
                  margin: '0 auto',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <p style={{ fontFamily: 'poppins', fontWeight: '300' }}></p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: '200px',
                    margin: '0 auto',
                  }}
                >
                  <Container
                    style={{ margin: '0 auto' }}
                    triggerText={triggerText}
                    onSubmit={onSubmit}
                  />
                </div>
              </div>
            </div>
          )}

          <style>
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
                  background: #6649b8;
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
                  height: 100%;
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
                  color:  #f0f0f0;
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
                  .project-submit{
                     display:grid;
                      grid-template-columns:1fr;
                       grid-template-rows:auto 4rem;

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
                      
                      .project-submit{
                        height:100%;
                        display: grid;
                        grid-template-columns: 3rem auto;
                        grid-template-rows:auto-fit;
                        overflow: hidden;
                        grid-gap: 10px;}
                      
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
              
                   
              
              `}
          </style>
        </div>
      </div>
    );
  }
}
Projects.propTypes = {
  postProject: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
  userProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  projects: state.projects,
});

export default connect(mapStateToProps, {
  postProject,
  userProject,
  deleteProject,
})(withRouter(Projects));
