import React, { Component } from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { Container, Content, Header, Text, Button } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationActions } from "react-navigation";
import * as Animatable from "react-native-animatable";
import RegisterForm from "../Components/RegisterForm";

import { submit } from "redux-form";

import CountryListActions, {
  CountryListSelectors
} from "../Redux/CountryListRedux";

// Styles
import styles from "./Styles/RegisterScreenStyle";
import CitiesActions, { CitiesSelectors } from "../Redux/CitiesRedux";
import RegisterActions, { RegisterSelectors } from "../Redux/RegisterRedux";

import Spinner from "react-native-loading-spinner-overlay";

import { Colors } from "../Themes";

class RegisterScreen extends Component {
  state = {};

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.fetchCountryList();
  }

  render() {
    return (
      <Container>
        <Content scrollEnabled>
          <View style={styles.mainContainer}>
            <Spinner
              visible={
                this.props.fetchingCity ||
                this.props.fetchingCountry ||
                this.props.fetchingRegister
              }
              style={{ alignSelf: "center" }}
              color={Colors.burntSienna}
              size="large"
            />
            <View style={styles.headerContainer}>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={this.props.navigateBack}
              >
                <Icon
                  size={40}
                  name="ios-arrow-round-back"
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Sign Up</Text>
            </View>
            <View style={styles.formContainer}>
              <RegisterForm
                countryList={this.props.countryList}
                onCountryPick={this.props.fetchCitiesList}
                cityList={this.props.cityList}
                onSubmit={this.props.register}
              >
                <Button
                  onPress={this.props.submitForm}
                  style={styles.submitButton}
                  block
                  primary
                >
                  <Text uppercase={false}>Sign Up</Text>
                </Button>
              </RegisterForm>
              <View style={styles.termsContainer}>
                <Text style={styles.termsText}>
                  By signing up, you agree to Bhive's Terms of Service, Cookie
                  Policy, Privacy Policy and Content Policies.
                </Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    countryList: CountryListSelectors.getData(state),
    cityList: CitiesSelectors.getData(state),
    fetchingCountry: CountryListSelectors.getFetching(state),
    fetchingCity: CitiesSelectors.getFetching(state),
    fetchingRegister: RegisterSelectors.getFetching(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCountryList: () => dispatch(CountryListActions.countryListRequest()),

    fetchCitiesList: id => {
      id != "" && dispatch(CitiesActions.citiesRequest(id));
    },

    register: form => dispatch(RegisterActions.registerRequest(form)),

    submitForm: () => dispatch(submit("registerForm")),

    navigateBack: () => dispatch(NavigationActions.back()),

    navigate: navigationObject =>
      dispatch(NavigationActions.navigate(navigationObject))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
