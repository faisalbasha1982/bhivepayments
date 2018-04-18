import React, { Component } from "react";
import { Images, Metrics } from "../Themes";
import LoginActions, { LoginSelectors } from "../Redux/LoginRedux";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { Container, Content, Header, Text, Button } from "native-base";

import { submit } from "redux-form";

import Icon from "react-native-vector-icons/FontAwesome";
import Hr from "react-native-hr-component";
import { connect } from "react-redux";
import { LoginButton, AccessToken, LoginManager } from "react-native-fbsdk";
import GoogleSignIn from "react-native-google-sign-in";
import { NavigationActions } from "react-navigation";
// Styles
import styles from "./Styles/LoginScreenStyle";
import LoginForm from "../Components/LoginForm";

import * as Animatable from "react-native-animatable";
import RegisterScreen from "./RegisterScreen";

import HockeyApp from "react-native-hockeyapp";

import Config from "react-native-config";

class LoginScreen extends Component {
  state = {
    showLogin: true
  };

  static navigationOptions = {
    header: null
  };

  handleFacebookLogin() {
    LoginManager.logInWithReadPermissions([
      "public_profile",
      "email",
      "user_friends"
    ]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }

  async signIn() {
    try {
      await GoogleSignIn.configure({
        serverClientID: Config.ANDROID_CLIENT_ID
      });

      const user = await GoogleSignIn.signInPromise();

      console.tron.log(user);
    } catch (error) {
      console.tron.log(`Google error ${JSON.stringify(error)}`);
    }
  }

  bounce = async () => {
    await this.refs.test.fadeOutDown(200);
    this.setState({ showLogin: !this.state.showLogin });
    await this.refs.test.fadeInUp(200);
  };

  render() {
    const hrStyle = { marginVertical: Metrics.baseMargin };
    return (
      <Container>
        <Content scrollEnabled>
          <View style={styles.mainContainer}>
            <Animatable.View
              animation="fadeInLeft"
              useNativeDriver={true}
              delay={500}
              duration={1000}
              style={styles.topContainer}
            >
              <View style={styles.headerContainer}>
                <View style={styles.headerLeftContainer}>
                  <Image source={Images.logo} style={styles.headerLeftLogo} />
                </View>

                <View style={styles.headerRightContainer}>
                  <Text style={styles.headerRightText}>B-HIVE</Text>
                  <View style={styles.headerRightPayContainer}>
                    <Text style={styles.headerRightPayText}>PAY</Text>
                  </View>
                </View>
              </View>

              <View style={styles.topTextContainer}>
                <Text style={styles.topText}>Payment done easier!</Text>
              </View>
            </Animatable.View>

            <Animatable.View
              animation="fadeInUp"
              useNativeDriver={true}
              delay={400}
              duration={1500}
              easing="ease-in-out-cubic"
              style={styles.container}
              ref="test"
            >
              {this.state.showLogin ? (
                <View style={{ flex: 1 }}>
                  <Text style={styles.loginText}>Login </Text>
                  <View style={styles.form}>
                    <LoginForm
                      isFetching={this.props.fetching}
                      onSubmit={this.props.loginAction}
                    >
                      <Button
                        onPress={this.props.submitForm}
                        style={styles.submitButton}
                        block
                        primary
                      >
                        <Text uppercase={false}>Continue</Text>
                      </Button>
                    </LoginForm>
                  </View>
                  <View style={styles.registerContainer}>
                    <TouchableOpacity
                      /* onPress={() =>
                        this.props.navigate({
                          routeName: "OTPScreen"
                        })
                      } */
                    >
                      <Text style={styles.forgotPassword}>
                        Forgot password?
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigate({
                          routeName: "RegisterScreen"
                        })
                      }
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.newToBhive}>New to Bhive?</Text>
                        <Text style={styles.signUp}> Sign Up!</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 4 }}>
                    <Hr
                      lineColor="#eee"
                      thickness={2}
                      textPadding={10}
                      text="or"
                      hrStyles={hrStyle}
                    />
                    <Button
                      bordered
                      style={styles.googleButton}
                      onPress={this.signIn}
                    >
                      <Image
                        source={Images.google_icon}
                        style={styles.googleIconLeft}
                      />
                      <Text style={styles.googleButtonText}>
                        CONTINUE USING google
                      </Text>
                    </Button>

                    <Button
                      block
                      onPress={this.handleFacebookLogin}
                      style={[styles.facebookButton, styles.authButton]}
                    >
                      <Icon
                        name="facebook"
                        style={styles.iconLeft}
                        size={30}
                        color={"white"}
                      />
                      <Text style={styles.buttonText}>
                        Continue Using Facebook
                      </Text>
                    </Button>
                  </View>
                </View>
              ) : (
                <RegisterScreen
                  backButton={this.bounce}
                  onSubmit={() =>
                    this.props.resetNavigate({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({
                          routeName: "SignedIn"
                        })
                      ],
                      key: null
                    })
                  }
                />
              )}
            </Animatable.View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: LoginSelectors.getFetching(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAction: ({ username, password }) =>
      dispatch(LoginActions.loginRequest(username, password)),

    resetNavigate: navigationObject =>
      dispatch(NavigationActions.reset(navigationObject)),

    navigate: navigationObject =>
      dispatch(NavigationActions.navigate(navigationObject)),

    submitForm: () => dispatch(submit("loginForm"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
