import React, { Component } from 'react';
import style from 'react-style-tag';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { getIdeas } from '../../actions/ideaActions';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Collapsible from 'react-collapsible';
import { Tooltip } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import comment from '../../static/comment.svg';
import beforeClap from '../../static/beforeClap.svg';
import afterClap from '../../static/afterClap.svg';
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIdeas: [],
      commentText: '',
    };
  }

  componentWillMount() {
    this.props.getIdeas();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.ideas.allIdeas !== nextProps.ideas.allIdeas) {
      this.setState({
        newIdeas: nextProps.ideas.allIdeas,
      });
    }
  }

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
      text: this.state.commentText,
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
    console.log('idea', this.state.newIdeas);
    if (this.state.newIdeas) {
      return (
        <div>
          <section className='projects'>
            <div className='content'>
              <div className='teamBx' style={{ transition: '0.6s ease out' }}>
                {this.state.newIdeas.map((idea) => (
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
                        justifyContent: 'start',
                        padding: '10px',
                      }}
                    >
                      <Avatar
                        style={{
                          marginTop: '5px',
                          marginLeft: '10px',
                        }}
                      >
                        {idea.userId.firstname[0]}
                        {idea.userId.lastname[0]}
                      </Avatar>
                      <Link
                        to={
                          idea.userId._id !== this.props.auth.user.id
                            ? '/profileOther/' + idea.userId._id
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
                                <h6>
                                  {idea.userId.firstname} {idea.userId.lastname}
                                </h6>
                              </React.Fragment>
                            }
                            plac
                            placement='top'
                          >
                            <span
                              style={{
                                fontWeight: 'bold',
                                color: '#222',
                              }}
                            >
                              {idea.userId.firstname} {idea.userId.lastname}
                            </span>
                          </Tooltip>
                        </span>
                        <span style={{ fontSize: '12px', color: 'grey' }}>
                          {new Intl.DateTimeFormat('en-GB', {
                            month: 'long',
                            day: '2-digit',
                            year: 'numeric',
                          }).format(new Date(idea.creationDate))}
                        </span>
                      </Link>
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
                        {idea.title}
                        <Tooltip title='More Info'>
                          <i className='material-icons right'>more_vert</i>
                        </Tooltip>
                      </span>
                      <div
                        className='description'
                        style={{ marginBottom: '1rem', transition: '0.6s' }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci architecto culpa eligendi esse et eum
                        fuga iusto molestiae perspiciatis recusandae.
                      </div>
                      <div>
                        {JSON.parse(idea.tags)?.map((tag) => {
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
                        style={{ display: 'flex', transition: '0.6s ease out' }}
                      >
                        <div style={{ transition: '0.6s ease out' }}>
                          {idea.likes.includes(this.props.auth.user.id) ? (
                            <img
                              alt=''
                              className='up'
                              style={{ width: '28px', marginBottom: '-5px' }}
                              src={afterClap}
                              onClick={() => {
                                this.unlikeIdea(idea._id);
                              }}
                            />
                          ) : (
                            <img
                              alt=''
                              className='up'
                              style={{ width: '28px', marginBottom: '-5px' }}
                              src={beforeClap}
                              onClick={() => {
                                this.likeIdea(idea._id);
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
                            {idea.likes.length}
                          </span>
                        </div>
                        <Collapsible
                          style={{ transition: '0.6s' }}
                          className='comments'
                          trigger={
                            // <img
                            //   style={{ width: "24px", margin: "0 10px" }}
                            //   src="https://img.icons8.com/pastel-glyph/64/000000/comments.png"
                            // />
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
                          {idea.comments.map((record) => {
                            return (
                              <div style={{ display: 'flex' }}>
                                <div style={{ margin: '0.5rem' }}>
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
                                    {/* <Avatar
                                      style={{
                                        width: '20px',
                                        height: '20px',
                                        marginTop: '5px',
                                        marginLeft: '10px',
                                      }}
                                    >
                                      {record.postedBy.firstname[0]}
                                      {record.postedBy.lastname[0]}
                                    </Avatar> */}
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
                        {idea.comments.length ? (
                          <div style={{ display: 'flex' }}>
                            <div style={{ margin: '0.2rem' }}>
                              <span>
                                <img
                                  style={{
                                    width: '22px',
                                    height: '22px',
                                    borderRadius: '50%',
                                    backgroundSize: 'fit',
                                  }}
                                  src={idea.comments[0].postedBy.profilePic}
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
                                {idea.comments[0].postedBy.firstname}
                              </p>
                            </div>
                            <p style={{ padding: '3px 10px' }}>
                              {idea.comments[0].text}
                            </p>
                          </div>
                        ) : (
                          <p>no comments yet</p>
                        )}
                      </div>
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                          this.commentIdea(event.target[0].value, idea._id);
                        }}
                      >
                        <input
                          type='text'
                          placeholder='add a comment'
                          onChange={(event) => {
                            this.setState({ commentText: event.target.value });
                          }}
                        />
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Exercitationem in incidunt ipsa. Aspernatur atque
                        dolorum fugit nulla optio placeat, praesentium sunt!
                        Accusamus accusantium amet atque commodi consequatur
                        culpa cumque debitis dolorum ea impedit inventore iusto,
                        molestiae nulla omnis possimus quas quis, rem
                        reprehenderit sapiente sequi, sint soluta temporibus
                        ullam vero voluptate! Accusamus assumenda perspiciatis
                        quia. A, ab asperiores culpa dignissimos dolore dolorem,
                        et facere fuga fugiat fugit hic laudantium perferendis,
                        reprehenderit suscipit veritatis. Debitis ipsa quas
                        quibusdam quis vel, voluptate!
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
    } else {
      return (
        <CircularProgress
          style={{ marginLeft: '50%', marginTop: '10%' }}
          color='secondary'
        />
      );
    }
  }
}

Posts.propTypes = {
  auth: PropTypes.object.isRequired,
  getIdeas: PropTypes.func.isRequired,
  ideas: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  ideas: state.ideas,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getIdeas,
})(Posts);
