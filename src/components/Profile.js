import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Image, Text, View, Button } from 'react-native';
import { logout } from '../actions/authActions';

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log('profile props:', this.props.user);
    this.render_repos = this.render_repos.bind(this);
  }

  render_repos() {
    let repos = `${this.props.user.repos}`
    return (
      <View>
        <Text> Repos List </Text>
      </View>
    );

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
          title="Logout"/>
      </ScrollView>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  console.log('profile ownProps:', this.ownProps);
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLogOut: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
