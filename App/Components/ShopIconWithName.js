import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View } from "react-native";
import { Thumbnail, Text } from "native-base";
import PropTypes from "prop-types";
import styles from "./Styles/ShopIconWithNameStyle";
import { Images } from "../Themes";

const ShopIconWithName = ({ imageSource, name }) => (
  <View style={styles.container}>
    <Thumbnail small source={imageSource} style={styles.thumbnail} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

ShopIconWithName.propTypes = {
  imageSource: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired
};

export default ShopIconWithName;
