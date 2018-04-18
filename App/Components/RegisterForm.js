import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import validator from "validate.js";
import {
  Container,
  Item,
  Input,
  Header,
  Body,
  Content,
  Title,
  Button,
  Text,
  Form,
  Icon,
  Label
} from "native-base";

import RenderCountryPickerModal from "./RenderFieldCountryPicker";

import RenderField from "./RenderFieldWithLabel";

import RenderFieldCheckbox from "./RenderFieldCheckbox";

import validate from "../Lib/validate";

import { getAllCountries } from "react-native-country-picker-modal";

import { Field, Fields, reduxForm } from "redux-form";
import { required, email, numericality, length } from "redux-form-validators";
import styles from "./Styles/RegisterFormStyle";

import RenderFieldPicker from "./RenderFieldPicker";

var validations = {
  firstName: [required()],
  lastName: [required()],
  userName: [required()],
  password: [required(), length({ min: 6 })],
  phoneNumber: [required(), numericality({ int: true })],
  country: [required()],
  city: [required()],
  gender: [required()],
  phone: [required()],
  dailCode: [required()]
};

class RegisterForm extends Component {
  // Prop type warnings
  static propTypes = {
    onSubmit: PropTypes.func,
    isFetching: PropTypes.bool,
    countryList: PropTypes.array.isRequired,
    onCountryPick: PropTypes.func,
    cityList: PropTypes.array.isRequired
  };

  // Defaults for props
  static defaultProps = {
    isFetching: false
  };

  constructor(props) {
    super(props);
    this.state = {
      cca2: "AE",
      callingCode: "971",
      countryList: getAllCountries().map(country => country.cca2),
      checkboxData: [
        { label: "Male", checked: true },
        { label: "Female", checked: false }
      ]
    };
    console.tron.log(
      `Country list is ${JSON.stringify(getAllCountries(), null, 2)}`
    );
  }

  componentDidMount() {
    this.props.autofill("country", "United Arab Emirates");
    this.props.autofill("dailCode", `+${this.state.callingCode}`);
  }

  render() {
    const {
      handleSubmit,
      reset,
      submit,
      invalid,
      children,
      countryList,
      cityList,
      onCountryPick
    } = this.props;

    return (
      <Form style={styles.container}>
        <View style={styles.nameContainer}>
          <Field
            name="firstName"
            withRef
            ref={c => (this.firstName = c)}
            inputOptions={{
              keyboardType: "default",
              returnKeyType: "next",
              onSubmitEditing: () =>
                this.lastName.getRenderedComponent().refs.lastName._root.focus()
            }}
            fieldContainerStyle={{ width: "50%" }}
            component={RenderField}
            label="First Name"
          />

          <Field
            name="lastName"
            withRef
            ref={c => (this.lastName = c)}
            inputOptions={{
              keyboardType: "default",
              returnKeyType: "next",
              onSubmitEditing: () =>
                this.username.getRenderedComponent().refs.userName._root.focus()
            }}
            fieldContainerStyle={{ width: "35%" }}
            component={RenderField}
            label="Last Name"
          />
        </View>

        <Field
          name="userName"
          withRef
          ref={c => (this.username = c)}
          inputOptions={{
            keyboardType: "default",
            returnKeyType: "next",
            onSubmitEditing: () =>
              this.password.getRenderedComponent().refs.password._root.focus()
          }}
          component={RenderField}
          label="Username"
        />

        <Field
          name="password"
          withRef
          ref={c => (this.password = c)}
          inputOptions={{
            keyboardType: "default",
            returnKeyType: "next",
            secureTextEntry: true,
            onSubmitEditing: () =>
              this.phoneNumber.getRenderedComponent().refs.phone._root.focus()
          }}
          component={RenderField}
          label="Password"
        />

        <Field
          name="phone"
          withRef
          ref={c => (this.phoneNumber = c)}
          inputOptions={{
            keyboardType: "numeric",
            returnKeyType: "next",
            maxLength: 9
          }}
          onChange={(event, newValue, previousValue, name) => {
            this.props.autofill(
              "phoneNumber",
              `+${this.state.callingCode}${newValue}`
            );
          }}
          countryPickerOptions={{
            onChange: value => {
              console.tron.log(`Values are ${JSON.stringify(value, null, 2)}`);
              this.props.autofill("dailCode", `+${value.callingCode}`);
              this.props.autofill("country", value.name);
              this.setState({
                cca2: value.cca2,
                callingCode: value.callingCode
              });
            },
            cca2: this.state.cca2,
            closeable: true,
            filterable: true,
            translation: "eng",
            countryList: this.state.countryList
          }}
          callingCode={this.state.callingCode}
          cca2={this.state.cca2}
          component={RenderCountryPickerModal}
          label="Phone Number"
        />
        
        <Field
          name="country"
          withRef
          isFetching={this.props.fetchingCountries}
          ref={c => (this.country = c)}
          onChange={onCountryPick}
          pickerOptions={{
            mode: "dropdown",
            placeholder: "Choose your country",
            enabled: countryList.length != 0
          }}
          list={countryList}
          valueFieldName="_id"
          labelFieldName="name"
          component={RenderFieldPicker}
        />

        <Field
          name="city"
          withRef
          isFetching={this.props.fetchingCities}
          ref={c => (this.city = c)}
          pickerOptions={{
            mode: "dropdown",
            placeholder: "Choose your city",
            enabled: cityList.length != 0
          }}
          list={cityList}
          valueFieldName="_id"
          labelFieldName="name"
          component={RenderFieldPicker}
        />

        <Field
          name="gender"
          normalize={(value, previousValue, allValues, previousAllValues) =>
            value.toUpperCase()
          }
          checkboxData={this.state.checkboxData}
          component={RenderFieldCheckbox}
          fieldContainerStyle={styles.checkboxContainer}
          checkboxOptions={{
            style: styles.checkbox,
            labelStyle: styles.checkboxLabel
          }}
        />
        {children}
      </Form>
    );
  }
}

export default reduxForm({
  form: "registerForm",
  validate: validate(validations)
})(RegisterForm);
