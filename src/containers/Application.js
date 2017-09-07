import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "../components/Login";
import Profile from "../components/Profile";

class Application extends Component {
  constructor(props) {
    super(props);
    console.log("Application props:", this.props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Profile />;
    } else {
      return <Login />;
    }
  }
}

Application.PropTypes = {
  isLoggedin: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(Application);
