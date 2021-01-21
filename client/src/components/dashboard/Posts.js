import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { getProject } from '../../actions/projectActions';
import { getIdeas } from '../../actions/ideaActions';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Collapsible from 'react-collapsible';
import { Tooltip } from '@material-ui/core';
import { requestJoin } from '../../actions/teamActions';
import Avatar from '@material-ui/core/Avatar';
import beforeClap from '../../static/beforeClap.svg';
import afterClap from '../../static/afterClap.svg';
import comment from '../../static/comment.svg';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Chip from '@material-ui/core/Chip';
import { Zoom } from '@material-ui/core';
import M from 'materialize-css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProjects: [],
      newIdeas: [],
      allProjectImages: {},
      commentText: '',
    };
  }

  componentWillMount = async () => {
    await this.props.getProject();
    await this.props.getIdeas();
  };

  componentWillReceiveProps = async (nextProps, nextContext) => {
    if (this.props.projects.allProjects !== nextProps.projects.allProjects) {
      await this.setState({
        newProjects: nextProps.projects.allProjects,
      });
      let images = {};
      if (nextProps.projects.allProjects) {
        for (let i in nextProps.projects.allProjects) {
          if (nextProps.projects.allProjects[i].images) {
            images[
              nextProps.projects.allProjects[i]._id
            ] = nextProps.projects.allProjects[i].images.map((item) => {
              return { orginal: item.url, thumbnail: item.url };
            });
          }
        }
      }
      await this.setState({ allProjectImages: images });
    }

    if (this.props.ideas.allIdeas !== nextProps.ideas.allIdeas) {
      this.setState({
        newIdeas: nextProps.ideas.allIdeas,
      });
    }
  };
  likeProject = (id) => {
    console.log(id);
    const postId = {
      postId: id,
    };
    axios
      .put('api/projects/like', postId)
      .then((result) => {
        const newData = this.state.newProjects.map((item) => {
          if (item._id === result.data._id) {
            return result.data;
          } else {
            return item;
          }
        });
        this.setState({
          newProjects: newData,
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
        const newData = this.state.newProjects.map((item) => {
          if (item._id === result.data._id) {
            return result.data;
          } else {
            return item;
          }
        });
        this.setState({
          newProjects: newData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  commentProject = (text, postId) => {
    const comment = {
      text: this.state.commentText,
      postId: postId,
    };
    this.setState({ commentText: '' });

    axios
      .put('/api/projects/comment', comment)
      .then((result) => {
        const newData = this.state.newProjects.map((item) => {
          if (item._id === result.data._id) {
            return result.data;
          } else {
            return item;
          }
        });
        this.setState({
          newProjects: newData,
        });
        M.toast({ html: 'Posted Successfully', style: 'color:red' });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  requestjoin = (id) => {
    this.props.requestJoin(id);
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
    this.setState({ commentText: '' });

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
    console.log(this.state.allProjectImages);
    if (this.state.newProjects && this.state.allProjectImages) {
      return (
        <div>
          <section className='projects'>
            <div className='content' style={{ margin: '0 auto' }}>
              <div className='teamBx' style={{ transition: '0.6s ease out' }}>
                {this.state.newProjects.map((project) => (
                  <div
                    className='card'
                    style={{
                      transition: '0.6s ease out',
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
                        zIndex: 'inherit',
                      }}
                    >
                      <div style={{ display: 'flex' }}>
                        <Tooltip
                          TransitionComponent={Zoom}
                          title={
                            <React.Fragment>
                              <div style={{ width: '200px', height: '120px' }}>
                                <div
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                  }}
                                >
                                  <Avatar>A</Avatar>
                                  <span
                                    style={{
                                      fontSize: '14px',
                                      margin: 'auto 5px',
                                    }}
                                  >
                                    {project.userId.firstname}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: '14px',
                                      margin: 'auto 0',
                                    }}
                                  >
                                    {project.userId.lastname}
                                  </span>
                                </div>
                              </div>
                            </React.Fragment>
                          }
                          placement='top'
                          arrow
                        >
                          <Avatar
                            style={{
                              marginTop: '5px',
                              marginLeft: '10px',
                            }}
                          >
                            A
                          </Avatar>
                        </Tooltip>
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
                            <span
                              style={{
                                fontWeight: '500',
                                marginRight: '5px',
                                color: '#222',
                              }}
                            >
                              {project.userId.firstname}
                            </span>
                            <span
                              style={{
                                fontWeight: '500',
                                color: '#222',
                              }}
                            >
                              {project.userId.lastname}
                            </span>
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
                      <Tooltip title='project status' placement='top' arrow>
                        <div className='status'>
                          <span
                            style={{
                              fontSize: '12px',
                              padding: '2px 5px',
                              borderRadius: '10%',
                              background: '#fff3e0',
                              color: 'orange',
                              fontWeight: '500',
                            }}
                          >
                            {project.status}
                          </span>
                        </div>
                      </Tooltip>
                    </div>
                    <div
                      className='card-content'
                      style={{
                        transition: '0.6s ease out',
                        padding: '20px',
                        paddingTop: '10px',
                      }}
                    >
                      <span
                        style={{
                          textTransform: 'capitalize',
                          transition: '0.6s',
                        }}
                        className='card-title activator grey-text text-darken-4'
                      >
                        {project.title}
                        <Tooltip title='More Info' placement='top' arrow>
                          <i className='material-icons right'>more_vert</i>
                        </Tooltip>
                      </span>
                      <div
                        className='description'
                        style={{ marginBottom: '0.5rem', transition: '0.6s' }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci architecto culpa eligendi esse et eum
                        fuga iusto molestiae perspiciatis recusandae.
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
                      <div style={{ padding: '10px' }}>
                        {this.state.allProjectImages[project._id]?.length >
                          0 && (
                          <AliceCarousel>
                            {this.state.allProjectImages[project._id].map(
                              (image) => {
                                if (image.orginal) {
                                  return (
                                    <img
                                      style={{
                                        width: '100%',
                                        objectFit: 'cover',
                                      }}
                                      src={image.orginal}
                                      alt=''
                                    />
                                  );
                                } else {
                                  return <></>;
                                }
                              }
                            )}
                          </AliceCarousel>
                        )}
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          transition: '0.6s ease out',
                          marginTop: '0.5rem',
                          marginBottom: '0.5rem',
                        }}
                      >
                        <div>
                          <div style={{ transition: '0.6s ease out' }}>
                            {project.likes.includes(this.props.auth.user.id) ? (
                              <img
                                alt=''
                                className='up'
                                style={{ width: '28px', marginBottom: '-5px' }}
                                src={afterClap}
                                onClick={() => {
                                  this.unlikeProject(project._id);
                                }}
                              />
                            ) : (
                              <img
                                alt=''
                                className='down'
                                style={{ width: '28px', marginBottom: '-5px' }}
                                src={beforeClap}
                                onClick={() => {
                                  this.likeProject(project._id);
                                }}
                              />
                            )}

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
                                alt=''
                                id='comment'
                                src={comment}
                                style={{
                                  width: '21px',
                                  marginLeft: '10px',
                                  marginBottom: '-10px',
                                }}
                              />
                            }
                          >
                            {project.comments.map((record) => {
                              return (
                                <div style={{ display: 'flex' }}>
                                  <div
                                    style={{
                                      margin: '0.5rem',
                                      display: 'flex',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    <span
                                      style={{
                                        paddingTop: '3px',
                                      }}
                                    >
                                      <img
                                        alt=''
                                        style={{
                                          width: '20px',
                                          height: '20px',
                                          borderRadius: '50%',
                                        }}
                                        src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/115909667/original/7d79dd80b9eecaa289de1bc8065ad44aa03e2daf/do-a-simple-but-cool-profile-pic-or-logo-for-u.jpeg'
                                      />
                                    </span>
                                    <p
                                      style={{
                                        fontSize: '12px',
                                        fontFamily: 'sans-serif',
                                        textTransform: 'lowercase',
                                        padding: '5px',
                                        fontWeight: '600',
                                      }}
                                    >
                                      {record.postedBy.firstname}
                                    </p>
                                  </div>
                                  <p style={{ padding: '10px 5px' }}>
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
                        <div style={{ float: 'right' }}>
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

                      <div style={{ height: '30px' }}>
                        {project.comments.length ? (
                          <div style={{ display: 'flex', overflow: 'hidden' }}>
                            <div style={{ margin: '0.2rem', display: 'flex' }}>
                              <span
                                style={{
                                  paddingTop: '3px',
                                }}
                              >
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
                                  fontFamily: 'sans-serif',
                                  textTransform: 'lowercase',
                                  padding: '5px',
                                  fontWeight: '600',
                                }}
                              >
                                {project.comments[0].postedBy.firstname}
                              </p>
                            </div>
                            <p style={{ padding: '5px 5px' }}>
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
                          this.commentProject(
                            event.target[0].value,
                            project._id
                          );
                        }}
                      >
                        <input
                          type='text'
                          className='comment'
                          placeholder='add a comment'
                          onChange={(event) => {
                            this.setState({ commentText: event.target.value });
                          }}
                        />
                      </form>
                      <style>
                        {`
                          input:focus{
                            border-bottom:1px solid #ff1f5a !important;
                            box-shadow:0 1px 0 0 #ff1f5a !important;
                            }
                          `}
                      </style>
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
                          elit. Exercitationem in incidunt ipsa. Aspernatur
                          atque dolorum fugit nulla optio placeat, praesentium
                          sunt! Accusamus accusantium amet atque commodi
                          consequatur culpa cumque debitis dolorum ea impedit
                          inventore iusto, molestiae nulla omnis possimus quas
                          quis, rem reprehenderit sapiente sequi, sint soluta
                          temporibus ullam vero voluptate! Accusamus assumenda
                          perspiciatis.
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
              </div>
            </div>
          </section>
          <style>
            {`
                        .teamBx{
                        position:relative;
                        display:grid;
                        grid-template-columns: repeat(auto-fit, minmax(700px, 0.85fr));
                        align-items:start;
                        grid-gap:40px;
                        margin-top:50px;
                        transition:0.6s ;
                        justify-content:center;
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

                    .image-gallery-slide-wrapper{
                      position:static;
                    }
                    .image-gallery-thumbnail {
                      width:800px !important;
                      height:70% !important;
                    }
      
                        
                        `}
          </style>
        </div>
      );
    } else {
      // return <CircularProgress color='secondary' />;
      return (
        <div className='projects'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          atque veritatis quod perferendis necessitatibus dolores error omnis
          blanditiis illum officiis ullam doloremque tenetur cupiditate iste
          laudantium odio optio beatae nobis, minus delectus in! Amet libero
          itaque nam aliquam beatae minima fugit doloremque, voluptatum commodi,
          ea, soluta laborum numquam iusto? Nihil optio nostrum distinctio
          repellat neque vel omnis nesciunt illum, tempore animi quod, accusamus
          quam, veritatis velit sit quae. Quia tempora, provident magni iure
          possimus odit est architecto magnam ea nostrum nisi, impedit at
          facilis aliquam corporis hic eveniet error id distinctio, neque nam
          consequuntur voluptates dolore aperiam? Aspernatur, numquam modi?
        </div>
      );
    }
  }
}

Posts.propTypes = {
  auth: PropTypes.object.isRequired,
  getProject: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
  getIdeas: PropTypes.func.isRequired,
  ideas: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  requestJoin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  projects: state.projects,
  ideas: state.ideas,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getProject,
  getIdeas,
  requestJoin,
})(Posts);
