import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { confirmUser } from '../../actions/authActions';
import classnames from 'classnames';
import signupImage from '../assets/register/signup-image.jpeg';
import M from 'materialize-css';
import style from 'react-style-tag';
import axios from 'axios';

class Reset extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
    };
    axios.post('/api/users/reset-password', userData).then((result) => {
      if (result.data.error) {
        M.toast({
          html: result.data.error,
          classes: '#fff red darken-3 rounded',
        });
      } else {
        console.log(result.data);
        M.toast({
          html: 'please check your email',
          classes: '#fff green darken-3 rounded',
        });
        this.props.history.push('/login');
      }
    });
  };
  render() {
    const { errors } = this.state;

    return (
      <section className='section'>
        <div className='register-container'>
          <div className='user signinBx'>
            <div className='imgBx'>
              <img src={signupImage} alt='signup' />
            </div>
            <div className='formBx'>
              <form onSubmit={this.onSubmit}>
                <h2>Reset Password</h2>
                <input
                  style={{ padding: '0 10px', margin: '8px 0' }}
                  type='text'
                  id='email'
                  onChange={this.onChange}
                  error={errors.email}
                  className={classnames('', {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                  placeholder='Email Address'
                />
                <span style={{ color: 'red' }}>
                  {errors.email}
                  {errors.emailnotfound}
                </span>

                <input type='submit' value='Reset' />
                {/*<div className="other-signup">*/}
                {/*  <span style={{ fontSize: "12px", color: "grey" }}>*/}
                {/*    or signup using*/}
                {/*  </span>*/}
                {/*  <div className="signup-icons">*/}
                {/*    <Link to="/">*/}
                {/*      <img src={googleIcon} alt="google" />*/}
                {/*    </Link>*/}
                {/*    <Link to="/">*/}
                {/*      <img src={facebookIcon} alt="facebook" />*/}
                {/*    </Link>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </form>
            </div>
          </div>
        </div>
        <style>
          {`
                    .other-signup{
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        }
                    
                    .signup-icons{
                        
                        }
                    
                    .signup-icons img  {
                        width:25px;
                        }
                        
                    
                    *{
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: sans-serif;
                    
                    }
                    
                    .section{
                        position: relative;
                        min-height: 100vh;
                        background: #d1c4e9;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                    }
                    
                    section .register-container{
                        position: relative;
                        width: 800px;
                        height: 500px;
                        background: #fff;
                        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
                        overflow: hidden;
                        transition: 1s;
                    }
                    
                    section .register-container .user{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                    }
                    
                    section .register-container .user .imgBx{
                        position: relative;
                        width: 50%;
                        height: 100%;
                        background: #ff0;
                        transition: 0.5s;
                    }
                    
                    section .register-container .user .imgBx img{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    section .register-container .user .formBx{
                        position: relative;
                        width: 50%;
                        height: 100%;
                        background: #fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding:40px;
                        
                        transition: 0.5s;
                    }
                    
                    section .register-container .user .formBx form h2{
                        font-size: 18px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        text-align: center;
                        width: 100%;
                        margin-bottom: 10px;
                        color: #555;
                    }
                    
                    section .register-container .user .formBx form input{
                        position: relative;
                        width: 100%;
                        padding: 10px;
                        background: #f5f5f5;
                        color: #333;
                        border: none;
                        outline: none;
                        box-shadow: none;
                        margin: 8px 0;
                        font-size: 14px;
                        letter-spacing: 1px;
                        font-weight: 300;
                    }
                    
                    section .register-container .user .formBx form input:focus{
                        position: relative;
                        width: 100%;
                        padding: 10px;
                        background: #f5f5f5;
                        color: #333;
                        border: none;
                        outline: none;
                        margin: 8px 0;
                        font-size: 14px;
                        letter-spacing: 1px;
                        font-weight: 300;
                        box-shadow: 0 2px 4px grey;
                    }
                    
                    
                    section .register-container .user .formBx form input[type="submit"]{
                        max-width: 100px;
                        background: #677eff;
                        color: #fff;
                        cursor: pointer;
                        font-size: 14px;
                        font-weight: 500;
                        letter-spacing: 1px;
                        transition: 0.5s;
                    }
                    
                    section .register-container .user .formBx form .signup{
                        position: relative;
                        margin-top: 20px;
                        font-size: 12px;
                        letter-spacing: 1px;
                        color: #555;
                        text-transform: uppercase;
                        font-weight: 300;
                    }
                    
                    section .register-container .user .formBx form .signup a{
                        font-weight: 600;
                        text-decoration: none;
                        color: #677eff;
                    }
                    
                    @media (max-width: 991px) {
                        section .register-container {
                            max-width: 400px;
                        }
                        section .register-container .imgBx{
                            display: none;
                        }
                        section .register-container .user .formBx{
                            width: 100%;
                        }
                    }
                    `}
        </style>
      </section>
    );
  }
}

Reset.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { confirmUser })(Reset);
