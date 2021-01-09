import React, { Component } from 'react';
import style from 'react-style-tag';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currentUser } from '../actions/userActions';

class InterestsPage extends Component {
  componentDidMount() {
    this.props.currentUser(this.props.auth.user.id);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div>
          <h2>Your Interests</h2>
        </div>
        <div className='container'>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Web Design</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Python</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Mechanics</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Auto-Mobile</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Electronics</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Web Design</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Python</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Mechanics</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Auto-Mobile</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Electronics</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Web Design</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Python</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Mechanics</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Auto-Mobile</span>
            </label>
          </div>
          <div>
            <label>
              <input type='checkbox' name='' />
              <span style={{ height: 'auto' }}>Electronics</span>
            </label>
          </div>
        </div>
        <div className='button-container'>
          <Link to='/Dashboard'>
            <button>Continue</button>
          </Link>
        </div>
        <style>
          {`                     
                        h2{
                            margin:5%;
                            text-align:center;
                            }
                        
                        .container{
                            top:20%;
                            max-width:1200px;
                            margin:0 auto;
                            display:flex;
                            flex-wrap:wrap;
                            justify-content:center;
                            }
                         
                        .container div{
                            margin:10px;
                            }
                        
                        .container div label{
                            cursor: pointer;
                            }
                        
                        .container div label input[type="checkbox"]{
                            display:none;
                            }
                            
                        .container div label span{
                            position: relative;
                            display: inline-block;
                            background: #222;
                            padding: 15px 30px;
                            color: #fff;
                            test-shadow: 0 1px 4px rgba(0,0,0,0.5);
                            border-radius:30px;
                            font-size:20px;
                            transition:0.5s;
                            user-select-none;
                            overflow-hidden;
                            
                            }
                            
                        .container div label span:before{
                            content: '';
                            position:absolute;
                            top:0;
                            left:0;
                            
                            width:100%;
                            background:rgba(255,255,255,.1);
                            }
                            
                        .container div label input[type="checkbox"]:checked ~ span {
                            background: #df49a6;
                            }
                           
                        .button-container{
                            margin:0 auto;
                            display:flex;
                            flex-wrap:wrap;
                            justify-content:center;
                            margin-top:5%;
                            }
                        
                        button{
                            decoration:none;
                            width:100px;
                            border:none;
                            border-radius:20px;
                            height:5vh;  
                            outline:none;  
                           }  
                           
                         
                        button:hover{
                            background-color: #df49a6;
                            decoration:none;
                            width:100px;
                            border:none;
                            border-radius:20px;
                            height:5vh;
                            outline:none; 
                            color:#fff;   
                           }      
                       
                                       
                        `}
        </style>
      </div>
    );
  }
}

InterestsPage.propTypes = {
  auth: PropTypes.object.isRequired,
  currentUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { currentUser })(InterestsPage);
