import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import platform from "../../native-base-theme/variables/platform";
import AppNavigationRedux from "../Navigation/ReduxNavigation";
import { connect } from "react-redux";
import HockeyApp from "react-native-hockeyapp";

// Styles
import styles from "./Styles/RootContainerStyle";

class RootContainer extends Component {
  componentWillMount() {
    HockeyApp.configure("858bf448ed2f4b6bb242d7b178ee0c41", true);
  }

  componentDidMount() {
    HockeyApp.start();
    HockeyApp.checkForUpdate(); // optional
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <View style={styles.applicationView}>
          <StatusBar barStyle="light-content" />
          <AppNavigationRedux />
        </View>
      </StyleProvider>
    );
  }
}

export default RootContainer;
