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
  Label,
  Spinner
} from "native-base";
import { Field, reduxForm } from "redux-form";

import RenderInput from "./RenderFieldWithLabel";

import validate from "../Lib/validate";

import { required, email, numericality, length } from "redux-form-validators";

import styles from "./Styles/LoginFormStyles";
import { Colors } from "../Themes";

var validations = {
  username: [required()],
  password: [
    required(),
    length({
      min: 6
    })
  ]
};

class LoginForm extends Component {
  state = { focusPasswordInput: false };

  // Prop type warnings
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isFetching: PropTypes.bool
  };

  // Defaults for props
  static defaultProps = {
    isFetching: false
  };

  render() {
    const { handleSubmit, reset, submit, invalid, children } = this.props;

    return this.props.isFetching ? (
      <View style={styles.container}>
        <Spinner style={{ alignSelf: "center" }} color={Colors.burntSienna} />
      </View>
    ) : (
      <Form style={styles.container}>
        <Field
          name="username"
          withRef
          ref={c => (this.email = c)}
          inputOptions={{
            keyboardType: "email-address",
            returnKeyType: "next",
            onSubmitEditing: () =>
              this.password.getRenderedComponent().refs.password._root.focus()
          }}
          component={RenderInput}
          label="Phone number/username/email"
        />

        <Field
          name="password"
          component={RenderInput}
          withRef
          ref={c => (this.password = c)}
          inputOptions={{
            keyboardType: "default",
            returnKeyType: "go",
            onSubmitEditing: handleSubmit,
            secureTextEntry: true
          }}
          label="Password"
        />
        {children}
      </Form>
    );
  }
}

export default reduxForm({
  form: "loginForm",
  validate: validate(validations)
})(LoginForm);
