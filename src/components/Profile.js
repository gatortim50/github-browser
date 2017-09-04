import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  ActivityIndicator,
  AsyncStorage, 
  ScrollView, 
  Image, 
  Text, 
  TouchableHighlight,
  View, 
  Button 
} from 'react-native';
import { logoutUser } from "../actions";
import styles from './common/Styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("profile props:", this.props.user);

    this.state = { 
      repos: [],
      isLoading: false 
     };
  }

  userLogout(e) {
    this.state = { 
      username: "",
      password: "",
      isLoading: true 
    };
    this.props.onLogout(this.state.username, this.state.password);
    e.preventDefault();
  }

  render() {
    return <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 20 }}>
          {`Welcome ${this.props.user.name}`}
        </Text>
        <Image style={{ width: 90, height: 90 }} source={{ uri: `${this.props.user.avatar_url}` }} />
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

        <TouchableHighlight onPress={e => this.userLogout(e)} style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableHighlight>

        <ActivityIndicator animating={this.state.isLoading} size="large" style={styles.loader} />
      </ScrollView>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('profile state:', this.state);
  return {
    user: state.auth.user,
    repos: state.githubRepos.repos,
    isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onLogout: (username, password) => {
      dispatch(logoutUser(username, password));
    } 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
