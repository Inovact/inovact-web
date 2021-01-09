import React, { Component } from 'react';
import style from 'react-style-tag';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { subscribersProject } from '../../actions/projectActions';
import { getIdeas } from '../../actions/ideaActions';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Collapsible from 'react-collapsible';
import { Tooltip } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subPro: [],
      newIdeas: [],
    };
  }

  componentWillMount() {
    this.props.subscribersProject();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.state.subPro !== nextProps.projects.subscribersProject) {
      this.setState({
        subPro: nextProps.projects.subscribersProject,
      });
    }
  }

  likeProject = (id) => {
    console.log(id);
    const postId = {
      postId: id,
    };
    axios
      .put('api/projects/like', postId)
      .then((result) => {
        const newData = this.state.subPro.map((item) => {
          if (item._id === result.data._id) {
            return result.data;
          } else {
            return item;
          }
        });
        this.setState({
          subPro: newData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  unlikeProject = (id) => {
    const postId = {
      postId: id,
    };
    axios
      .put('api/projects/unlike', postId)
      .then((result) => {
        const newData = this.state.subPro.map((item) => {
          if (item._id === result.data._id) {
            return result.data;
          } else {
            return item;
          }
        });
        this.setState({
          subPro: newData,
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
        const newData = this.state.subPro.map((item) => {
          if (item._id === result.data._id) {
            return result.data;
          } else {
            return item;
          }
        });
        this.setState({
          subPro: newData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  likeIdea = (id) => {
    console.log(id);
    const postId = {
      postId: id,
    };
    axios
      .put('api/ideas/like', postId)
      .then((result) => {
        const newData = this.state.newIdeas.map((item) => {
          if (item._id === result.data._id) {
            return result.data;
          } else {
            return item;
          }
        });
        this.setState({
          newIdeas: newData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  unlikeIdea = (id) => {
    console.log(id);
    const postId = {
      postId: id,
    };
    axios
      .put('api/ideas/unlike', postId)
      .then((result) => {
        console.log(result);
        const newData = this.state.newIdeas.map((item) => {
          if (item._id === result.data._id) {
            return result.data;
          } else {
            return item;
          }
        });
        this.setState({
          newIdeas: newData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  commentIdea = (text, postId) => {
    const comment = {
      text: text,
      postId: postId,
    };
    axios
      .put('/api/ideas/comment', comment)
      .then((result) => {
        console.log(result);
        const newData = this.state.newIdeas.map((item) => {
          if (item._id === result.data._id) {
            return result.data;
          } else {
            return item;
          }
        });
        this.setState({
          newIdeas: newData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props);
    console.log(this.state.subPro);
    return (
      <div>
        <section className='projects'>
          <div className='content'>
            <div className='teamBx' style={{ transition: '0.6s ease out' }}>
              {this.state.subPro.map((project) => (
                <div
                  className='card'
                  style={{
                    transition: '0.6s ease out',
                    boxShadow: '8px 4px 16px 0 rgba(0,0,0,0.2)',
                    borderRadius: '12px',
                  }}
                >
                  <div className='card-image waves-effect waves-block waves-light'>
                    <Link
                      to={
                        project.userId._id !== this.props.auth.user.id
                          ? '/profileOther/' + project.userId._id
                          : '/projects'
                      }
                    >
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
                          <span>{project.userId.firstname}</span>
                        </Tooltip>
                        <Tooltip title='Project Status' placement='top'>
                          <span style={{ color: '#9e9e9e', fontWeight: '500' }}>
                            {project.status}
                          </span>
                        </Tooltip>
                      </p>
                    </Link>
                    {/*<img*/}
                    {/*  className="activator"*/}
                    {/*  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"*/}
                    {/*/>*/}
                  </div>
                  <div
                    className='card-content'
                    style={{ transition: '0.6s ease out', padding: '20px' }}
                  >
                    <span
                      style={{
                        textTransform: 'capitalize',
                        transition: '0.6s',
                      }}
                      className='card-title activator grey-text text-darken-4'
                    >
                      {project.title}
                      <Tooltip title='More Info'>
                        <i className='material-icons right'>more_vert</i>
                      </Tooltip>
                    </span>
                    <div
                      className='description'
                      style={{ marginBottom: '1rem', transition: '0.6s' }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Adipisci architecto culpa eligendi esse et eum fuga iusto
                      molestiae perspiciatis recusandae.
                    </div>
                    <div
                      style={{ display: 'flex', transition: '0.6s ease out' }}
                    >
                      <div style={{ transition: '0.6s ease out' }}>
                        {project.likes.includes(this.props.auth.user.id) ? (
                          <i
                            style={{
                              color: 'yellow',
                              fontSize: '22px',
                              transition: '0.3s',
                            }}
                            className='fa fa-star'
                            onClick={() => {
                              this.unlikeProject(project._id);
                            }}
                          />
                        ) : (
                          <i
                            style={{
                              color: 'rgba(0,0,0,0.5)',
                              fontSize: '22px',
                              transition: '0.3s',
                            }}
                            className='fa fa-star'
                            onClick={() => {
                              this.likeProject(project._id);
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
                        style={{ transition: '0.6s' }}
                        className='comments'
                        trigger={
                          <img
                            style={{ width: '24px', margin: '0 10px' }}
                            src='https://img.icons8.com/pastel-glyph/64/000000/comments.png'
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
                                      width: '22px',
                                      borderRadius: '50%',
                                    }}
                                    alt=''
                                    src='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
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
                          i.fa.fa-comment:hover{
                             color:#1e88e5 !important;
                             transition:0.5s;
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
                                style={{
                                  width: '22px',
                                  height: '22px',
                                  borderRadius: '50%',
                                }}
                                src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/115909667/original/7d79dd80b9eecaa289de1bc8065ad44aa03e2daf/do-a-simple-but-cool-profile-pic-or-logo-for-u.jpeg'
                                alt=''
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
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        this.commentProject(event.target[0].value, project._id);
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
                      Card Title<i className='material-icons right'>close</i>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Exercitationem in incidunt ipsa. Aspernatur atque dolorum
                      fugit nulla optio placeat, praesentium sunt! Accusamus
                      accusantium amet atque commodi consequatur culpa cumque
                      debitis dolorum ea impedit inventore iusto, molestiae
                      nulla omnis possimus quas quis, rem reprehenderit sapiente
                      sequi, sint soluta temporibus ullam vero voluptate!
                      Accusamus assumenda perspiciatis quia. A, ab asperiores
                      culpa dignissimos dolore dolorem, et facere fuga fugiat
                      fugit hic laudantium perferendis, reprehenderit suscipit
                      veritatis. Debitis ipsa quas quibusdam quis vel,
                      voluptate!
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <style>
          {`
                      .teamBx{
                        position:relative;
                        display:grid;
                        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                        align-items:start;
                        grid-gap:40px;
                        margin-top:50px;
                        transition:0.6s ;
                    }
                    @media only screen and (max-width:700px){
                      .teamBx{
                        position:relative;
                        display:grid;
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        align-items:start;
                        grid-gap:40px;
                        margin-top:50px;
                        transition:0.6s ;
                        justify-content:center;
                    }
                    }
      
                        
                        `}
        </style>
      </div>
    );
  }
}

Posts.propTypes = {
  subscribersProject: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
  getIdeas: PropTypes.func.isRequired,
  ideas: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  projects: state.projects,
  subscribersProjects: state.subscribersProjects,
});

export default connect(mapStateToProps, {
  subscribersProject,
  getIdeas,
})(Posts);
