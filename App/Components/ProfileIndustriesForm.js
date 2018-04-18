import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
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

import validate from "../Lib/validate";


import { Field, Fields, reduxForm } from "redux-form";
import {
  required,
  email,
  numericality,
  length,
  date
} from "redux-form-validators";

import styles from "./Styles/ProfileIndustriesFormStyle";

import Icon from "react-native-vector-icons/Ionicons";

import { Images } from "../Themes";
import RenderFieldSearch from "./RenderFieldSearch";

var validations = {
  phoneNumber: [required(), numericality({ int: true })],
  phone: [required()],
  dailCode: [required()]
};

class ProfileIndustriesForm extends Component {
  // Prop type warnings
  static propTypes = {};

  // Defaults for props
  static defaultProps = {
    isFetching: false
  };

  state = {
  };

  render() {
    const { handleSubmit, reset, submit, invalid, children } = this.props;

    return (
      <Form style={styles.container}>
        <RenderFieldSearch />
        {children}
      </Form>
    );
  }
}

export default reduxForm({
  form: "profileIndustriesForm",
  validate: validate(validations)
})(ProfileIndustriesForm);
