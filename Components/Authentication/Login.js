import React, { Component } from "react";
import { connect } from "react-redux";

import { Button } from "native-base";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

// Stores
import * as actionCreators from "../../Store/actions/authActions";

// Styles
import styles from "./styles.js";

class Login extends Component {
  static navigationOptions = {
    headerRight: null
  };

  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    this.props.checkForToken();
  }
  render() {
    if (this.props.user) {
      this.props.navigation.replace("List");
    }
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A47B88"
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A47B88"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.authButtonStyle}
          onPress={() => this.props.login(this.state, this.props.navigation)}
        >
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Button
          transparent
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text style={styles.authOther}>Don't have an account? Register!</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  login: (userData, navigation) =>
    dispatch(actionCreators.login(userData, navigation)),
  checkForToken: () => dispatch(actionCreators.checkForExpiredToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
