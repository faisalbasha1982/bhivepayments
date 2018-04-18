import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "./Styles/RenderFieldSearchStyle";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import { Item, Input } from "native-base";

import { Colors } from "../Themes";

const RenderFieldSearch = ({fieldItemStyle, fieldIconOptions, fieldInputOptions}) => {
  return (
    <Item regular style={fieldItemStyle}>
      <EvilIcon {...fieldIconOptions} />
      <Input
      {...fieldInputOptions}
      />
    </Item>
  );
};

RenderFieldSearch.propTypes = {
  fieldItemStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  fieldIconOptions: PropTypes.object,
  fieldInputOptions: PropTypes.object
};

RenderFieldSearch.defaultProps = {
  fieldItemStyle: styles.searchItem,
  fieldIconOptions: {
    size: 20,
    name: "search",
    style: styles.searchIcon
  },
  fieldInputOptions: {
    style: styles.searchInput,
    placeholder: "Search for username or phone number"
  }
};

export default RenderFieldSearch;
