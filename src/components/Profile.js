import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  ActivityIndicator,
  AsyncStorage,
  ScrollView,
  Image,
  Text,
  TouchableHighlight,
  View,
  Button
} from "react-native";
import { logoutUser } from "../actions";
import Login from "./Login";
import styles from "./common/Styles";

class Profile extends Component {
  constructor(props) {
    super(props);
    const { user, isLoggedin } = this.props;
    console.log("user:", user);
    console.log("isLoggedin:", isLoggedin);
    console.log("profile props:", this.props);

    this.state = {
      isLoading: false
    };
  }

  userLogout(e) {
    this.setState = {
      isLoading: true
    };
    this.props.onLogout(this.state.username, this.state.password);
    e.preventDefault();
  }

  render() {
    if (!this.props.isLoggedIn) {
      console.log("redirect to login");
      return <Login />;
    }
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 20 }}>
          {`Welcome ${this.props.user.name}`}
        </Text>
        <Image
          style={{ width: 90, height: 90 }}
          source={{ uri: `${this.props.user.avatar_url}` }}
        />
        <Text style={{ fontSize: 13 }}>{`Bio: ${this.props.user.bio}`}</Text>
        <Text style={{ fontSize: 13 }}>
          {`Company: ${this.props.user.company}`}
        </Text>
        <Text style={{ fontSize: 13 }}>
          {`Location: ${this.props.user.location}`}
        </Text>
        <Text style={{ fontSize: 13 }}>
          {`Repos: ${this.props.user.public_repos}`}
        </Text>
        <View style={{ margin: 20 }} />

        <TouchableHighlight
          onPress={e => this.userLogout(e)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableHighlight>

        <ActivityIndicator
          animating={this.state.isLoading}
          size="large"
          style={styles.loader}
        />
      </ScrollView>
    );
  }
}

Profile.PropTypes = {
  isLoggedin: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: (username, password) => {
      dispatch(logoutUser(username, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
