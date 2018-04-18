import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "native-base";
import { View } from "react-native";
import styles from "./Styles/RenderFieldCheckboxStyle";
import CheckBox from "react-native-checkbox-heaven";

import { Colors } from "../Themes/";

export default class RenderFieldCheckbox extends Component {
  // Prop type warnings
  static propTypes = {
    fieldContainerStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    checkboxData: PropTypes.array.isRequired,
    checkboxOptions: PropTypes.object,
    onCheckboxChange: PropTypes.func,
    children: PropTypes.element
  };

  // Defaults for props
  static defaultProps = {
    fieldContainerStyle: styles.fieldContainer
  };

  state = {
    checkedLabel: null
  };

  componentDidMount() {
    this.setState({
      checkedLabel: this.props.checkboxData.find(element => element.checked)
        .label
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.checkedLabel != this.state.checkedLabel)
      this.props.input.onChange(this.state.checkedLabel);
  }

  onSelected = label => {
    this.setState({ checkedLabel: label });
  };

  render() {
    const {
      input,
      label,
      fieldContainerStyle,
      checkboxData,
      checkboxOptions,
      children,
      onCheckboxChange,
      meta: { touched, error, warning, valid }
    } = this.props;

    return (
      <View style={fieldContainerStyle}>
        {checkboxData.map((checkbox, index) => (
          <CheckboxView
            {...checkboxOptions}
            onChange={this.onSelected}
            label={checkbox.label}
            key={index}
            checked={checkbox.label == this.state.checkedLabel}
          />
        ))}
      </View>
    );
  }
}

export const CheckboxView = ({
  style,
  label,
  labelStyle,
  iconSize,
  iconName,
  checked,
  checkedColor,
  uncheckedColor,
  onChange
}) => {
  return (
    <CheckBox
      style={style || styles.component}
      label={label}
      labelStyle={labelStyle}
      iconSize={iconSize || 20}
      iconName={iconName || "iosCircleFill"}
      checked={checked}
      checkedColor={checkedColor || Colors.burntSienna}
      uncheckedColor={uncheckedColor || "#ee6f4c"}
      onChange={value => onChange(label)}
    />
  );
};
