import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { serialize } from '../../actions/authActions';
import { Redirect } from 'react-router';
import { Jumbotron } from 'react-bootstrap';

class serializeUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readyToRedirect: false,
    };
  }

  componentDidMount() {
    this.props.serialize(this.props.match.params.jwtToken);
    console.log(this.props.match.jwtToken);
    this.setState({ readyToRedirect: true });
  }

  render() {
    if (this.state.readyToRedirect) {
      return <Redirect to='/login' />;
    }

    return (
      <div style={{ background: '#d1c4e9' }}>
        <Jumbotron style={{ background: '#d1c4e9' }}>
          <p style={{ textAlign: 'center', fontSize: '20px' }}>
            You have logged in successfully
          </p>
          <div>
            <p style={{ textAlign: 'center' }}>
              Click
              <Link
                to='/login'
                style={{
                  background: '#673ab7',
                  border: 'none',
                  margin: '1rem',
                  marginBottom: '1rem',
                }}
                className='btn btn-dark'
              >
                here
              </Link>
              to return to dashboard
            </p>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

serializeUser.propTypes = {
  serialize: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { serialize })(serializeUser);

// import React from 'react';

// export const serialize = () => {
//   return <div>hello</div>;
// };
