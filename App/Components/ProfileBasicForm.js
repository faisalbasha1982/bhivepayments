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
  Thumbnail,
  Button,
  Text,
  Form,
  Label
} from "native-base";

import RenderCountryPickerModal from "./RenderFieldCountryPicker";

import RenderField from "./RenderFieldWithLabel";

import RenderFieldCheckbox from "./RenderFieldCheckbox";

import validate from "../Lib/validate";

import { getAllCountries } from "react-native-country-picker-modal";

import { Field, Fields, reduxForm } from "redux-form";
import {
  required,
  email,
  numericality,
  length,
  date
} from "redux-form-validators";

import styles from "./Styles/RegisterFormStyle";

import Icon from "react-native-vector-icons/Ionicons";

import RenderFieldPicker from "./RenderFieldPicker";
import RenderFieldDate from "./RenderFieldDate";
import { Images } from "../Themes";

var validations = {
  firstName: [required()],
  lastName: [required()],
  userName: [required()],
  date: [required()],
  country: [required()],
  city: [required()],
  gender: [required()],
  bio: []
};

class ProfileBasicForm extends Component {
  // Prop type warnings
  static propTypes = {
    countryList: PropTypes.array.isRequired,
    onCountryPick: PropTypes.func,
    cityList: PropTypes.array.isRequired
  };

  // Defaults for props
  static defaultProps = {
    isFetching: false
  };

  componentDidMount() {
    this.props.autofill("date", new Date());
  }

  constructor(props) {
    super(props);
    this.state = {
      countryList: getAllCountries().map(country => country.cca2),
      checkboxData: [
        { label: "Male", checked: true },
        { label: "Female", checked: false }
      ]
    };
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
          inputOptions={{
            keyboardType: "default",
            returnKeyType: "next",
            onSubmitEditing: () =>
              this.password.getRenderedComponent().refs.password._root.focus()
          }}
          component={RenderField}
          label="Username"
        />

        <Field name="date" component={RenderFieldDate} label="Date" />

        <Field
          name="country"
          withRef
          wrappedItem
          withLabel
          isFetching={this.props.fetchingCountries}
          ref={c => (this.country = c)}
          onChange={onCountryPick}
          pickerOptions={{
            mode: "dropdown",
            placeholder: "Choose your country",
            enabled: countryList.length != 0
          }}
          label="Country"
          list={countryList}
          valueFieldName="_id"
          labelFieldName="name"
          component={RenderFieldPicker}
        />

        <Field
          name="city"
          withRef
          wrappedItem
          withLabel
          label="City"
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
          name="bio"
          withRef
          ref={c => (this.bio = c)}
          inputOptions={{
            keyboardType: "default",
            returnKeyType: "next"
          }}
          component={RenderField}
          label="Add Bio"
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
  form: "profileBasicForm",
  validate: validate(validations)
})(ProfileBasicForm);
