import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import  {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

//import router from '../config/router'
import { loginUser } from '../actions/authActions'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isLoggedIn: false,
      user: []
    };
  }

  render() {
    let errorCtrl = <View />;
    <Image style={styles.logo} source={require('../images/Octocat.png')} />
    if (!this.state.success && this.state.badCredentials) {
      errorCtrl = (
        <Text style={styles.error}>
          That username and password combination did not work
        </Text>
      );
    }

    if (!this.state.success && this.state.unknownError) {
      errorCtrl = (
        <Text style={styles.error}>We experienced an unexpected issue</Text>
      );
    }

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../images/Octocat.png')} />
        <Text style={styles.heading}>Github Browser</Text>
        <TextInput
          onChangeText={text => this.setState({ username: text })}
          style={styles.loginInput}
          placeholder="Github username"
        />
        <TextInput
          onChangeText={text => this.setState({ password: text })}
          style={styles.loginInput}
          placeholder="Github password"
          secureTextEntry={true}
        />
        <TouchableHighlight
          onPress={() => this.props.getLogin()}
          style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>

        {errorCtrl}

        <ActivityIndicator
          animating={this.state.isLoading}
          size="large"
          style={styles.loader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        paddingTop: 40,
        padding: 10,
        alignItems: 'center',
        flex: 1
    },
    logo: {
        width: 66,
        height:55
    },
    heading: {
        fontSize: 30,
        margin: 10,
        marginBottom: 20
    },
    loginInput: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: .25,
        color: '#48BBEC'
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderRadius: .25,
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    loader: {
        marginTop: 20
    },
    error: {
        color: 'red',
        paddingTop: 10
    }
});

function mapStateToProps (state, ownProps) {
  console.log('login state:', state.auth);
  return {
    user: state.auth.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getLogin: () => dispatch(loginUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)