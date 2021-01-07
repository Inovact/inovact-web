import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import signupImage from "../assets/register/signup-image.jpeg";
import googleIcon from "../assets/register/google-icon.png";
import facebookIcon from "../assets/register/facebook-icon.png";
import style from "react-style-tag";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      dob: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
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

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      dob: this.state.dob,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    console.log(this.props);
    return (
      <div>
        <section className="section">
          <div className="register-container">
            <div className="user signupBx">
              <div className="formBx" style={{ position: "relative" }}>
                <form onSubmit={this.onSubmit}>
                  <h2>Create an Account</h2>
                  <input
                    style={{ padding: "0 10px", margin: "8px 0" }}
                    type="text"
                    name="firstname"
                    id="firstname"
                    onChange={this.onChange}
                    value={this.state.firstname}
                    error={errors.firstname}
                    className={classnames("", { invalid: errors.firstname })}
                    style={{ height: "18px" }}
                    placeholder="First Name"
                  />
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.firstname}
                  </span>
                  <input
                    style={{ padding: "0 10px", margin: "8px 0" }}
                    type="text"
                    name="lastname"
                    id="lastname"
                    onChange={this.onChange}
                    value={this.state.lastname}
                    error={errors.lastname}
                    className={classnames("", { invalid: errors.lastname })}
                    style={{ height: "18px" }}
                    placeholder="Last Name"
                  />
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.lastname}
                  </span>
                  <input
                    style={{ padding: "0 10px", margin: "8px 0" }}
                    type="text"
                    name="email"
                    id="email"
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    className={classnames("", { invalid: errors.email })}
                    style={{ height: "18px" }}
                    placeholder="Email Address"
                  />
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.email}
                  </span>
                  <input
                    style={{ padding: "0 10px", margin: "8px 0" }}
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    className={classnames("", { invalid: errors.password })}
                    style={{ height: "18px" }}
                    placeholder="Password"
                  />
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.password}
                  </span>
                  <input
                    style={{ padding: "0 10px", margin: "8px 0" }}
                    type="password"
                    name="password2"
                    id="password2"
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    className={classnames("", { invalid: errors.password2 })}
                    style={{ height: "18px" }}
                    placeholder="Confirm Password"
                  />
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.password2}
                  </span>
                  <input type="submit" value="Sign Up" />
                  <p
                    className="signup"
                    style={{ textAlign: "center", fontSize: "11px" }}
                  >
                    Already have an account ?<Link to="/login">Sign In</Link>{" "}
                  </p>
                  <div className="other-signup">
                    <span
                      style={{
                        fontSize: "14px",
                        alignItems: "center",
                        marginRight: "1%",
                        color: "grey",
                      }}
                    >
                      or signup using
                    </span>
                    <div className="signup-icons">
                      <a href="https://carca-version-1.herokuapp.com/api/users/auth/google">
                        <img src={googleIcon} alt="" />
                      </a>
                      <a href="https://carca-version-1.herokuapp.com/api/users/auth/facebook">
                        <img src={facebookIcon} alt="" />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="imgBx">
                <img src={signupImage} alt="" />
              </div>
            </div>
          </div>
        </section>
        <style>
          {`
                        .other-signup{
                            display:flex;
                            flex-direction:column;
                            align-items:center;
                            justifyContent:center
                            }
                        
                        .signup-icons{
                            
                            }
                        
                        .signup-icons img  {
                            width:30px;
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
                            padding: 40px;
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
                            margin-top:10px;
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
                            margin: 6px 0;
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
                            margin-top: 10px;
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
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
