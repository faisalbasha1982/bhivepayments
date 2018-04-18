import React, { Component } from "react";
import PropTypes from "prop-types";
import { Item, Input, Text, Icon, Label } from "native-base";
import { View } from "react-native";
import styles from "./Styles/RenderFieldWithLabelStyle";

export default class RenderFieldWithLabel extends Component {
  // Prop type warnings
  static propTypes = {
    fieldContainerStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    fieldItemStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    fieldInputStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    fieldLabelStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    inputOptions: PropTypes.object,
    children: PropTypes.element,
    icon: PropTypes.element
  };

  // Defaults for props
  static defaultProps = {
    fieldContainerStyle: styles.fieldContainer,
    fieldLabelStyle: styles.label,
    fieldItemStyle: styles.fieldItem
  };

  render() {
    const {
      input,
      label,
      icon,
      fieldContainerStyle,
      fieldItemStyle,
      fieldLabelStyle,
      fieldInputStyle,
      inputOptions,
      children,
      meta: { touched, error, warning, valid }
    } = this.props;
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <View style={fieldContainerStyle}>
        {icon}
        <Item
          error={hasError && touched}
          success={!hasError && touched}
          style={fieldItemStyle}
          stackedLabel
        >
          <Label style={fieldLabelStyle}>{label}</Label>
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
