import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, Text } from "react-native";
import OtpInputs from "react-native-otp-inputs";

import styles from "./Styles/OtpFormStyle";
import { Colors } from "../Themes";


const OtpForm = ({handleChange}) => {
  return (
    <OtpInputs
      unfocusedBorderColor={Colors.label}
      focusedBorderColor={Colors.burntSienna}
      containerStyles={styles.otpContainer}
      inputTextErrorColor="#222"
      inputContainerStyles={styles.inputContainer}
      errorMessageTextStyles={styles.errorMessageText}
      errorMessageContainerStyles={styles.errorMessageContainer}
      inputStyles={styles.input}
      handleChange={handleChange}
      numberOfInputs={4}
    />
  );
};

OtpForm.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default OtpForm;
