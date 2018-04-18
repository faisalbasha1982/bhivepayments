import React from "react";
import * as ReactNavigation from "react-navigation";
import { connect } from "react-redux";
import AppNavigation from "./AppNavigation";
import { BackHandler } from "react-native";
import { NavigationActions } from "react-navigation";
import { addNavigationHelpers } from "react-navigation";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";

// here is our redux-aware smart component
class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    console.log("Back pressed", nav);
    const activeRoute = nav.routes[nav.index];
    if (activeRoute.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    const addListener = createReduxBoundAddListener("root");
    const navigation = ReactNavigation.addNavigationHelpers({
      dispatch,
      state: nav,
      addListener
    });

    return <AppNavigation navigation={navigation} />;
  }
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
