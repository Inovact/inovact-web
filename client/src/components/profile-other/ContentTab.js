import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import style from 'react-style-tag';
import Collapsible from 'react-collapsible';
import axios from 'axios';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
      style={{ background: '#f5f8fa' }}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    margin: '0',
    backgroundColor: theme.palette.background.paper,
  },
  AppBar: {
    background: '#fff',
  },
}));

const likeProject = (id) => {
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

const unlikeProject = (id) => {
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

const commentProject = (text, postId) => {
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

export default function ScrollableTabsButtonPrevent({
  projects,
  user,
  ideas,
  teams,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='off'
          aria-label='scrollable prevent tabs example'
          style={{
            background: '#fff',
            height: '65px',
          }}
        >
          <Tab
            label='projects'
            style={{ background: '#fff', color: '#222' }}
            icon={
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='far'
                data-icon='project-diagram'
                className='svg-inline--far fa-project-diagram fa-w-20 icons-tab'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 640 512'
              >
                <g className='fa-group'>
                  <path
                    fill='#2196f3'
                    d='M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z'
                    className='fa-secondary'
                  />
                </g>
              </svg>
            }
            aria-label='phone'
            {...a11yProps(0)}
          />
          <Tab
            label='ideas'
            icon={
              <svg
                style={{ width: '1.2rem' }}
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='lightbulb'
                className='svg-inline--fa fa-lightbulb fa-w-11 icons-tab'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 352 512'
              >
                <path
                  fill='#fbc02d'
                  d='M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z'
                />
              </svg>
            }
            aria-label='favorite'
            {...a11yProps(1)}
            style={{ background: '#fff', color: '#222' }}
          />
          <Tab
            label='teams'
            icon={
              <svg
                style={{ width: '2rem' }}
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='user-friends'
                className='svg-inline--fa fa-user-friends fa-w-20 icons-tab'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 640 512'
              >
                <path
                  fill='currentColor'
                  d='M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z'
                />
              </svg>
            }
            aria-label='person'
            {...a11yProps(2)}
            style={{ background: '#fff', color: '#222' }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div
          className='projects'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
            gridGap: '20px',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          {projects.map((project) => {
            return (
              <div
                className='card'
                style={{
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px 0 rgba(0,0,0,0.2)',
                }}
                key={project._id}
              >
                <div className='card-image waves-effect waves-block waves-light'>
                  <p
                    style={{
                      color: '#222',
                      fontSize: '16px',
                      paddingLeft: '0px',
                      margin: '15px',
                      fontWeight: '400',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    {project.userId.firstname}
                    <span style={{ color: '#9e9e9e', fontWeight: '500' }}>
                      {project.status}
                    </span>
                  </p>
                </div>
                <div className='card-content'>
                  <span
                    style={{ textTransform: 'capitalize' }}
                    className='card-title activator grey-text text-darken-4'
                  >
                    {project.title}
                    <i className='material-icons right'>more_vert</i>
                  </span>
                  <div
                    className='description'
                    style={{ marginBottom: '1rem', transition: '0.6s' }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci architecto culpa eligendi esse et eum fuga iusto
                    molestiae perspiciatis recusandae.
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      {project.likes.includes(user.id) ? (
                        <i
                          style={{
                            color: 'yellow',
                            fontSize: '20px',
                            transition: '0.3s',
                          }}
                          className='fa fa-star'
                          onClick={() => {
                            unlikeProject(project._id);
                          }}
                        />
                      ) : (
                        <i
                          style={{
                            color: 'rgba(0,0,0,0.5)',
                            fontSize: '20px',
                            transition: '0.3s',
                          }}
                          className='fa fa-star'
                          onClick={() => {
                            likeProject(project._id);
                          }}
                        />
                      )}
                      <span
                        style={{
                          marginLeft: '5px',
                          fontFamily: 'sans serif',
                          fontSize: '18px',
                        }}
                      >
                        {project.likes.length}
                      </span>
                    </div>
                    <Collapsible
                      className='comments'
                      trigger={
                        <i
                          className='fa fa-comment'
                          style={{
                            marginLeft: '10px',
                            fontSize: '22px',
                            color: '#222',
                          }}
                        />
                      }
                    >
                      {project.comments.map((record) => {
                        return (
                          <h6 key={record._id}>
                            <span
                              style={{
                                textTransform: 'uppercase',
                                fontWeight: '400',
                                fontFamily: 'sans-serif',
                                fontSize: '16px',
                              }}
                            >
                              {record.postedBy.firstname}
                            </span>
                            <span style={{ marginLeft: '10px' }}>
                              {record.text}
                            </span>
                          </h6>
                        );
                      })}
                    </Collapsible>
                    <style>
                      {`
                          i.fa.fa-comment:hover{
                             color:#1e88e5 !important;
                             transition:0.5s;
                           }
                          `}
                    </style>
                  </div>

                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      commentProject(event.target[0].value, project._id);
                    }}
                  >
                    <input type='text' placeholder='add a comment' />
                  </form>
                </div>
                <div
                  style={{ transition: '0.6s ease ' }}
                  className='card-reveal'
                >
                  <span className='card-title grey-text text-darken-4'>
                    Card Title
                    <i className='material-icons right'>close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div
          className='projects'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
            gridGap: '20px',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          {ideas?.map((project) => {
            return (
              <div
                className='card'
                style={{
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px 0 rgba(0,0,0,0.2)',
                }}
                key={project._id}
              >
                <div className='card-image waves-effect waves-block waves-light'>
                  <p
                    style={{
                      color: '#222',
                      fontSize: '16px',
                      paddingLeft: '0px',
                      margin: '15px',
                      fontWeight: '400',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    {project.userId.firstname}
                    <span style={{ color: '#9e9e9e', fontWeight: '500' }}>
                      {project.status}
                    </span>
                  </p>
                </div>
                <div className='card-content'>
                  <span
                    style={{ textTransform: 'capitalize' }}
                    className='card-title activator grey-text text-darken-4'
                  >
                    {project.title}
                    <i className='material-icons right'>more_vert</i>
                  </span>
                  <div
                    className='description'
                    style={{ marginBottom: '1rem', transition: '0.6s' }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci architecto culpa eligendi esse et eum fuga iusto
                    molestiae perspiciatis recusandae.
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div>
                      {project.likes.includes(user.id) ? (
                        <i
                          style={{
                            color: 'yellow',
                            fontSize: '20px',
                            transition: '0.3s',
                          }}
                          className='fa fa-star'
                          onClick={() => {
                            unlikeProject(project._id);
                          }}
                        />
                      ) : (
                        <i
                          style={{
                            color: 'rgba(0,0,0,0.5)',
                            fontSize: '20px',
                            transition: '0.3s',
                          }}
                          className='fa fa-star'
                          onClick={() => {
                            likeProject(project._id);
                          }}
                        />
                      )}
                      <span
                        style={{
                          marginLeft: '5px',
                          fontFamily: 'sans serif',
                          fontSize: '18px',
                        }}
                      >
                        {project.likes.length}
                      </span>
                    </div>
                    <Collapsible
                      className='comments'
                      trigger={
                        <i
                          className='fa fa-comment'
                          style={{
                            marginLeft: '10px',
                            fontSize: '22px',
                            color: '#222',
                          }}
                        />
                      }
                    >
                      {project.comments.map((record) => {
                        return (
                          <h6 key={record._id}>
                            <span
                              style={{
                                textTransform: 'uppercase',
                                fontWeight: '400',
                                fontFamily: 'sans-serif',
                                fontSize: '16px',
                              }}
                            >
                              {record.postedBy.firstname}
                            </span>
                            <span style={{ marginLeft: '10px' }}>
                              {record.text}
                            </span>
                          </h6>
                        );
                      })}
                    </Collapsible>
                    <style>
                      {`
                          i.fa.fa-comment:hover{
                             color:#1e88e5 !important;
                             transition:0.5s;
                           }
                          `}
                    </style>
                  </div>

                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      commentProject(event.target[0].value, project._id);
                    }}
                  >
                    <input type='text' placeholder='add a comment' />
                  </form>
                </div>
                <div
                  style={{ transition: '0.6s ease ' }}
                  className='card-reveal'
                >
                  <span className='card-title grey-text text-darken-4'>
                    Card Title
                    <i className='material-icons right'>close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div
          className='projects'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
            gridGap: '20px',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          {teams !== 'undefined' &&
            teams.map((project) => {
              return (
                <div
                  className='card'
                  style={{
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px 0 rgba(0,0,0,0.2)',
                  }}
                  key={project._id}
                >
                  <div className='card-image waves-effect waves-block waves-light'>
                    <p
                      style={{
                        color: '#222',
                        fontSize: '16px',
                        paddingLeft: '0px',
                        margin: '15px',
                        fontWeight: '400',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      {project.userId.firstname}
                      <span style={{ color: '#9e9e9e', fontWeight: '500' }}>
                        {project.status}
                      </span>
                    </p>
                  </div>
                  <div className='card-content'>
                    <span
                      style={{ textTransform: 'capitalize' }}
                      className='card-title activator grey-text text-darken-4'
                    >
                      {project.title}
                      <i className='material-icons right'>more_vert</i>
                    </span>
                    <div
                      className='description'
                      style={{ marginBottom: '1rem', transition: '0.6s' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Adipisci architecto culpa eligendi esse et eum fuga iusto
                      molestiae perspiciatis recusandae.
                    </div>
                    <div style={{ display: 'flex' }}>
                      <div>
                        {project.likes.includes(user.id) ? (
                          <i
                            style={{
                              color: 'yellow',
                              fontSize: '20px',
                              transition: '0.3s',
                            }}
                            className='fa fa-star'
                            onClick={() => {
                              unlikeProject(project._id);
                            }}
                          />
                        ) : (
                          <i
                            style={{
                              color: 'rgba(0,0,0,0.5)',
                              fontSize: '20px',
                              transition: '0.3s',
                            }}
                            className='fa fa-star'
                            onClick={() => {
                              likeProject(project._id);
                            }}
                          />
                        )}
                        <span
                          style={{
                            marginLeft: '5px',
                            fontFamily: 'sans serif',
                            fontSize: '18px',
                          }}
                        >
                          {project.likes.length}
                        </span>
                      </div>
                      <Collapsible
                        className='comments'
                        trigger={
                          <i
                            className='fa fa-comment'
                            style={{
                              marginLeft: '10px',
                              fontSize: '22px',
                              color: '#222',
                            }}
                          />
                        }
                      >
                        {project.comments.map((record) => {
                          return (
                            <h6 key={record._id}>
                              <span
                                style={{
                                  textTransform: 'uppercase',
                                  fontWeight: '400',
                                  fontFamily: 'sans-serif',
                                  fontSize: '16px',
                                }}
                              >
                                {record.postedBy.firstname}
                              </span>
                              <span style={{ marginLeft: '10px' }}>
                                {record.text}
                              </span>
                            </h6>
                          );
                        })}
                      </Collapsible>
                      <style>
                        {`
                          i.fa.fa-comment:hover{
                             color:#1e88e5 !important;
                             transition:0.5s;
                           }
                          `}
                      </style>
                    </div>

                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        commentProject(event.target[0].value, project._id);
                      }}
                    >
                      <input type='text' placeholder='add a comment' />
                    </form>
                  </div>
                  <div
                    style={{ transition: '0.6s ease ' }}
                    className='card-reveal'
                  >
                    <span className='card-title grey-text text-darken-4'>
                      Card Title
                      <i className='material-icons right'>close</i>
                    </span>
                    <p>
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </TabPanel>
      <style>
        {`.MuiAppBar-colorPrimary{
                background:#fff;}
                
          .MuiPaper-elevation4{
                box-shadow:none;
                }
          .icons-tab{
                width:1.5rem;
            } 
             .PrivateTabIndicator-colorSecondary-5{
              background-color:#336699;}
                `}
      </style>
    </div>
  );
}
