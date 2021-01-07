import { Link } from "react-router-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Jumbotron } from "react-bootstrap";

class confirmed extends Component {
  constructor(props) {
    super();
    this.state = {
      message: "",
    };
  }

  componentDidMount() {
    this.setState({
      message: this.props.location.search.slice(9).replace(/%20/g, " "),
    });
  }

  render() {
    let message = this.state.message;
    return (
      <div style={{ background: "#d1c4e9" }}>
        <Jumbotron style={{ background: "#d1c4e9" }}>
          <p
            style={{ textAlign: "center", fontSize: "20px" }}
            dangerouslySetInnerHTML={{ __html: message }}
          ></p>
          <div>
            <p style={{ textAlign: "center" }}>
              Click
              <Link
                to="/login"
                style={{
                  background: "#673ab7",
                  border: "none",
                  margin: "1rem",
                  marginBottom: "1rem",
                }}
                className="btn btn-dark"
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

confirmed.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps)(confirmed);
