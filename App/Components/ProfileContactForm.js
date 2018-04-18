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

import styles from "./Styles/ProfileContactFormStyle";

import Icon from "react-native-vector-icons/Ionicons";

import RenderFieldPicker from "./RenderFieldPicker";

import { Images } from "../Themes";

var validations = {
  phoneNumber: [required(), numericality({ int: true })],
  phone: [required()],
  dailCode: [required()]
};

class ProfileBasicForm extends Component {
  // Prop type warnings
  static propTypes = {
  };

  // Defaults for props
  static defaultProps = {
    isFetching: false
  };

  state = {
    cca2: "AE",
      callingCode: "971",
      countryList: getAllCountries().map(country => country.cca2),
  }

  componentDidMount() {
    this.props.autofill("dailCode", `+${this.state.callingCode}`);
  }

  render() {
    const {
      handleSubmit,
      reset,
      submit,
      invalid,
      children,
    } = this.props;

    return (
      <Form style={styles.container}>
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
          label="Phone number"
        />
        {children}
      </Form>
    );
  }
}

export default reduxForm({
  form: "profileContactForm",
  validate: validate(validations)
})(ProfileBasicForm);
