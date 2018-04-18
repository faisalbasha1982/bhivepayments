import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, PixelRatio } from "react-native";
import { Item, Input, Picker, Form, Label } from "native-base";
import styles from "./Styles/RenderFieldPickerStyle";
import Icon from "react-native-vector-icons/Ionicons";

export default class RenderFieldPicker extends PureComponent {
  // Prop type warnings
  static propTypes = {
    list: PropTypes.array.isRequired,
    labelFieldName: PropTypes.string.isRequired,
    valueFieldName: PropTypes.string.isRequired,
    fieldContainerStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    fieldItemStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    fieldLabelStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    pickerOptions: PropTypes.object,
    wrappedItem: PropTypes.bool,
    withLabel: PropTypes.bool,
    children: PropTypes.element
  };

  // Defaults for props
  static defaultProps = {
    fieldContainerStyle: styles.fieldContainer,
    fieldItemStyle: styles.fieldItem,
    fieldLabelStyle: styles.label,
    wrappedItem: false,
    withLabel: false
  };

  state = {
    selectedValue: ""
  };

  componentDidMount() {
    if (this.props.list.length > 0) {
      this.setState({
        selectedValue: this.props.list[0][this.props.valueFieldName]
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list != this.props.list && nextProps.list.length > 0) {
      this.setState({
        selectedValue: nextProps.list[0][nextProps.valueFieldName]
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedValue != this.state.selectedValue)
      this.props.input.onChange(this.state.selectedValue);
  }

  render() {
    const {
      input,
      label,
      fieldContainerStyle,
      fieldItemStyle,
      fieldLabelStyle,
      list,
      wrappedItem,
      withLabel,
      labelFieldName,
      valueFieldName,
      pickerOptions,
      children,
      meta: { touched, error, warning, valid }
    } = this.props;
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <View style={[fieldContainerStyle]}>
        <Form style={[fieldContainerStyle]}>
          {withLabel ? <Label style={fieldLabelStyle}>{label}</Label> : null}
          {wrappedItem && (
            <Item style={fieldItemStyle}>
              <Picker
                {...pickerOptions}
                style={[fieldContainerStyle]}
                ref={input.name}
                onValueChange={(itemValue, itemPosition) => {
                  this.setState({ selectedValue: itemValue });
                  pickerOptions.onValueChange &&
                    pickerOptions.onValueChange(itemValue, itemPosition);
                }}
                selectedValue={
                  pickerOptions.selectedValue
                    ? pickerOptions.selectedValue
                    : this.state.selectedValue
                }
                itemStyle={[styles.itemStyle, pickerOptions.itemStyle]}
                textStyle={[styles.textStyle, pickerOptions.textStyle]}
                headerStyle={[styles.headerStyle, pickerOptions.headerStyle]}
                itemTextStyle={[
                  styles.itemTextStyle,
                  pickerOptions.itemTextStyle
                ]}
              >
                {list.map((element, index) => (
                  <Item
                    key={index}
                    label={element[labelFieldName]}
                    value={element[valueFieldName]}
                  />
                ))}
              </Picker>
            </Item>
          )}

          {!wrappedItem && (
            <Picker
              {...pickerOptions}
              style={[fieldContainerStyle]}
              ref={input.name}
              onValueChange={(itemValue, itemPosition) => {
                this.setState({ selectedValue: itemValue });
                pickerOptions.onValueChange &&
                  pickerOptions.onValueChange(itemValue, itemPosition);
              }}
              selectedValue={
                pickerOptions.selectedValue
                  ? pickerOptions.selectedValue
                  : this.state.selectedValue
              }
              itemStyle={[styles.itemStyle, pickerOptions.itemStyle]}
              textStyle={[styles.textStyle, pickerOptions.textStyle]}
              headerStyle={[styles.headerStyle, pickerOptions.headerStyle]}
              itemTextStyle={[
                styles.itemTextStyle,
                pickerOptions.itemTextStyle
              ]}
            >
              {list.map((element, index) => (
                <Item
                  key={index}
                  label={element[labelFieldName]}
                  value={element[valueFieldName]}
                />
              ))}
            </Picker>
          )}
        </Form>
        {children}
      </View>
    );
  }
}
