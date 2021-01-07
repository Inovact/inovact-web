import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Style } from 'react-style-tag';
import { profileEdit } from '../../actions/authActions';
import axios from 'axios';
import NavbarHome from '../layout/Navbar';
class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: props.auth.user.firstname,
      lastname: props.auth.user.lastname,
      pic: props.auth.user.pic,
      dob: props.auth.user.dob,
      errors: {},
    };
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.errors !== prevProps.errors) {
      return {
        errors: nextProps.errors,
      };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({
        errors: this.props.errors,
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('file', this.state.pic);
    data.append('upload_preset', 'carca-webapp');
    data.append('cloud_name', 'charcha');

    axios
      .post('https://api.cloudinary.com/v1_1/charcha/image/upload', data)
      .then((res) => {
        this.setState({
          pic: res.data.url,
        });
        const editUser = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          pic: res.data.url,
          dob: this.state.dob,
        };
        // console.log(editUser);
        this.props.profileEdit(editUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  openNav = () => {
    document.querySelector('.edit-profile').style.marginLeft = '8remrem';
  };

  closeNav = () => {
    document.querySelector('.edit-profile').style.margin = '0 auto';
  };

  render() {
    console.log(this.props);
    return (
      <div className='container-fluid'>
        <div>
          <NavbarHome />
        </div>
        <nav
          className='navbar'
          id='nav'
          // onMouseEnter={this.openNav}
          // onMouseLeave={this.closeNav}
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
        <div className='edit-profile'>
          <form onSubmit={this.onSubmit}>
            <div>
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  margin: '0 auto',
                  backgroundImage: `url(${this.state.pic})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
                className='image'
              />
              <div className='file-field input-field'>
                <input
                  type='file'
                  onChange={(event) => {
                    this.setState({ pic: event.target.files[0] });
                  }}
                />
              </div>
            </div>
            <div className='formBx'>
              <div className='inputField' style={{ margin: '20px' }}>
                <label
                  style={{
                    color: '#222',
                    margin: '-5px 10px',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  First Name
                </label>
                <input
                  style={{
                    background: '#f5f5f5',
                    border: 'none',
                    padding: '0 10px',
                    borderRadius: '8px',
                    margin: '0 10px',
                  }}
                  autoComplete='off'
                  type='text'
                  name='firstname'
                  id='firstname'
                  onChange={(e) => {
                    this.setState({ firstname: e.target.value });
                  }}
                  placeholder={this.state.firstname}
                />
              </div>
              <div className='inputField' style={{ margin: '20px' }}>
                <label
                  style={{
                    color: '#222',
                    margin: '-5px 10px',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Last Name
                </label>
                <input
                  style={{
                    background: '#f5f5f5',
                    border: 'none',
                    padding: '0 10px',
                    borderRadius: '8px',
                    margin: '0 10px',
                  }}
                  autoComplete='off'
                  type='text'
                  name='lastname'
                  id='lastname'
                  onChange={(e) => {
                    this.setState({ lastname: e.target.value });
                  }}
                  placeholder={this.state.lastname}
                />
              </div>
              <div className='inputField' style={{ margin: '20px' }}>
                <label
                  style={{
                    color: '#222',
                    margin: '-5px 10px',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Date Of Birth
                </label>
                <input
                  style={{
                    background: '#f5f5f5',
                    border: 'none',
                    padding: '0 10px',
                    borderRadius: '8px',
                    margin: '0 10px',
                    width: '100%',
                  }}
                  autoComplete='off'
                  type='date'
                  name='dob'
                  id='dob'
                  onChange={(e) => {
                    this.setState({ dob: e.target.value });
                  }}
                />
              </div>
              <div className='inputField' style={{ margin: '20px' }}>
                <label
                  style={{
                    color: '#222',
                    margin: '-5px 10px',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Small Bio
                </label>
                <input
                  style={{
                    background: '#f5f5f5',
                    border: 'none',
                    padding: '0 10px',
                    borderRadius: '8px',
                    margin: '0 10px',
                  }}
                  autoComplete='off'
                  type='text'
                  name='bio'
                  id='bio'
                  placeholder='Tech Enthusiast'
                />
              </div>
            </div>
            <div className='submitBtn'>
              <input
                type='submit'
                style={{
                  outline: 'none',
                  background: 'orange',
                  border: 'none',
                  height: '40px',
                  width: '150px',
                  borderRadius: '10px',
                  color: 'white',
                }}
              />
            </div>
          </form>
        </div>
        <Style>{`
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
             grid-template-columns: 3rem auto 200px;   
             grid-gap:10px;
          }
              .navbar {
                  top: 0;
                  width: 3rem;
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
                .edit-profile{
                  display:flex;
                  flex-wrap:wrap;
                  max-width:768px;
                  margin:50px auto;
                  transition:0.5s;
                }
                 .formBx{
                   display:flex;
                   flex-wrap:wrap !important;
                  justify-content:space-evenly;
                  width:100%;
                  margin:0 auto;
                  margin-bottom:40px;
                  transition:0.5s;
                  }
                  form{
                  transition:0.6s;
                   margin:0 auto;
                   }
                 input[type=text]:focus{  
                 
                    box-shadow:0 4px 16px 0 #e0e0e0 !important;
                     border-bottom:none !important;
                    background:white !important;
                    transition:0.5s !important
                   }
                   .submitBtn{
                   display:flex;
                   justify-content:center;
                   margin-left:40px;
                   }
                   input[type="submit"]:hover{
                    box-shadow:0 4px 8px 0 #ffb74d;
                    transition:0.4s;
                    font-size:16px;
                    }                 
          `}</Style>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  profileEdit: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { profileEdit })(
  withRouter(ProfileEdit)
);
