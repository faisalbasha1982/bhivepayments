import React, { Component } from "react";
import PropTypes from 'prop-types';
import CountryPicker from "react-native-country-picker-modal";
import { View, PixelRatio } from "react-native";
import { Item, Input, Text, Label } from "native-base";
import styles from "./Styles/RenderFieldCountryPickerStyle";
import Icon from "react-native-vector-icons/Ionicons";

export default class RenderFieldCountryPicker extends Component {
  // Prop type warnings
  static propTypes = {
    fieldContainerStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    fieldItemStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    fieldInputStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    fieldLabelStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    inputOptions: PropTypes.object,
    children: PropTypes.element,
    cca2: PropTypes.string,
    callingCode: PropTypes.string,
    countryPickerOptions: PropTypes.object
  };

  // Defaults for props
  static defaultProps = {
    fieldContainerStyle: styles.fieldContainer,
    fieldLabelStyle: styles.label,
    fieldItemStyle: styles.fieldItem,
    fieldInputStyle: styles.input
  };

  render() {
    const {
      input,
      label,
      fieldContainerStyle,
      fieldItemStyle,
      fieldLabelStyle,
      fieldInputStyle,
      inputOptions,
      countryPickerOptions,
      cca2,
      callingCode,
      children,
      meta: { touched, error, warning, valid }
    } = this.props;
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <View style={fieldContainerStyle}>
        <Label style={fieldLabelStyle}>{label}</Label>
        <Item
          error={hasError && touched}
          success={!hasError && touched}
          style={fieldItemStyle}
        >
          <CountryPicker {...countryPickerOptions} />
          {callingCode != "" &&
            callingCode && (
              <Text style={styles.callingCode}>+{callingCode}</Text>
            )}
          <Icon style={styles.icon} size={20} name="ios-arrow-down" />
          <Input
            {...input}
            {...inputOptions}
            ref={inputOptions.ref || input.name}
            style={fieldInputStyle}
          />
        </Item>
        {children}
      </View>
    );
  }
}
