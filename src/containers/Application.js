import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import Profile from '../components/Profile';

class Application extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <Profile />;
    } else {
      return <Login />;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(Application);
