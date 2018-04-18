import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import styles from "./Styles/CustomBarcodeStyle";
import { Colors } from "../Themes";
/**
    HOW TO MAKE CUSTOM BARCODE FINDER
    1. make a copy of src/BarcodeFinder.js and place it in your project
    2. add it to your project
    3. add it as a child to the Camera
      <Camera barcodeFinderComponent={<MyCustomBarcodeFinder />} />
**/

const CustomBarcode = props => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          { borderColor: props.borderColor },
          styles.topLeftEdge,
          {
            borderLeftWidth: props.borderWidth,
            borderTopWidth: props.borderWidth
          }
        ]}
      />
      <View
        style={[
          { borderColor: props.borderColor },
          styles.topRightEdge,
          {
            borderRightWidth: props.borderWidth,
            borderTopWidth: props.borderWidth
          }
        ]}
      />
      <View
        style={[
          { borderColor: props.borderColor },
          styles.bottomLeftEdge,
          {
            borderLeftWidth: props.borderWidth,
            borderBottomWidth: props.borderWidth
          }
        ]}
      />
      <View
        style={[
          { borderColor: props.borderColor },
          styles.bottomRightEdge,
          {
            borderRightWidth: props.borderWidth,
            borderBottomWidth: props.borderWidth
          }
        ]}
      />
    </View>
  );
};

export default CustomBarcode;
