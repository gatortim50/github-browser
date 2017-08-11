import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, ScrollView, Image, Text, View, Button } from 'react-native';
import { logout } from '../actions';
import { getUserRepos } from '../actions';

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log('profile props:', this.props.user);
    this.render_repos = this.render_repos.bind(this);

    this.state = { repos: [] };
  }

  render_repos() {
    
    // TODO fetch repo data
    console.log("profile state:", this.state);
    return <View>
        <Text style={{ fontSize: 13 }}>
          {`Repos: ${this.props.repos}`}
          {`Repos: ${this.state}`}
        </Text>

        <Button onPress={() => getUserRepos()} title="<Get Repos>" />
      </View>;

  }

  render() {
    return (
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 20}}>
          {`Welcome ${this.props.user.name}`}
        </Text>
        <Image
          style={{width: 90, height: 90}}
          source={{uri: `${this.props.user.avatar_url}` }}
        />
        <Text style={{fontSize: 13}}>
          {`Bio: ${this.props.user.bio}`}
        </Text>
        <Text style={{fontSize: 13}}>
          {`Company: ${this.props.user.company}`}
        </Text>
        <Text style={{fontSize: 13}}>
          {`Location: ${this.props.user.location}`}
        </Text>
        <Text style={{fontSize: 13}}>
          {`Repos: ${this.props.user.public_repos}`}
        </Text>
        {this.render_repos()}
        <View style={{margin: 20}}/>
        <Button onPress={() => this.props.getLogOut()}
          title="<Logout>"/>
      </ScrollView>
    );
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
    getRepos: () => dispatch(getUserRepos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
