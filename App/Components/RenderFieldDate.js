import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  DatePickerAndroid,
  DatePickerIOS,
  TouchableOpacity
} from "react-native";
import styles from "./Styles/RenderFieldDateStyle";
import Icon from "react-native-vector-icons/Ionicons";

import { Item, Input, Text, Label } from "native-base";
import { getYear, getDay, getMonth } from "../Transforms/ConvertFromIsoDate";

const RenderFieldDate = ({
  input,
  label,
  fieldContainerStyle,
  fieldItemStyle,
  fieldLabelStyle,
  fieldInputStyle,
  fieldInputTextStyle,
  children,
  meta: { touched, error, warning, valid }
}) => {
  const openDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        console.tron.log(`Datepicker value is ${year} ${month} ${day}`);
        input.onChange(new Date(year, month, day));
      }
    } catch ({ code, message }) {
      console.tron.log("Cannot open date picker", message);
    }
  };

  var hasError = false;
  if (error !== undefined) {
    hasError = true;
  }

  return (
    <View style={fieldContainerStyle}>
      <View style={{ flex: 3 }}>
        <Label style={fieldLabelStyle}>Month</Label>
        <Item
          onPress={this.openDatePicker}
          error={hasError && touched}
          success={!hasError && touched}
          style={fieldItemStyle}
        >
          <Input editable={false} style={fieldInputStyle}>
            <Text style={fieldInputTextStyle}>{getMonth(input.value)}</Text>
          </Input>
          <Icon style={styles.icon} size={20} name="ios-arrow-down" />
        </Item>
      </View>

      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Label style={fieldLabelStyle}>Day</Label>
        <Item
          onPress={this.openDatePicker}
          error={hasError && touched}
          success={!hasError && touched}
          style={fieldItemStyle}
        >
          <Input editable={false} style={fieldInputStyle}>
            <Text style={fieldInputTextStyle}>{getDay(input.value)}</Text>
          </Input>
          <Icon style={styles.icon} size={20} name="ios-arrow-down" />
        </Item>
      </View>

      <View style={{ flex: 3 }}>
        <Label style={fieldLabelStyle}>Year</Label>
        <Item
          onPress={this.openDatePicker}
          error={hasError && touched}
          success={!hasError && touched}
          style={fieldItemStyle}
        >
          <Input editable={false} style={fieldInputStyle}>
            <Text style={fieldInputTextStyle}>{getYear(input.value)}</Text>
          </Input>
          <Icon style={styles.icon} size={20} name="ios-arrow-down" />
        </Item>
      </View>
    </View>
  );
};

RenderFieldDate.propTypes = {
  fieldContainerStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  fieldItemStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  fieldInputStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  fieldLabelStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  fieldInputTextStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  children: PropTypes.element
};

RenderFieldDate.defaultProps = {
  fieldContainerStyle: styles.fieldContainer,
  fieldLabelStyle: styles.label,
  fieldItemStyle: styles.fieldItem,
  fieldInputStyle: styles.input,
  fieldInputTextStyle: styles.inputText
};

export default RenderFieldDate;
