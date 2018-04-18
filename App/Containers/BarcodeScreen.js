import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Text, Item, Input } from "native-base";

import { RNCamera } from "react-native-camera";

import Icon from "react-native-vector-icons/Ionicons";
import EvilIcon from "react-native-vector-icons/EvilIcons";

import { Images, Metrics, Colors } from "../Themes";

import Hr from "react-native-hr-component";

import { NavigationActions } from "react-navigation";

import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import * as Animatable from "react-native-animatable";

// Styles
import styles from "./Styles/BarcodeScreenStyle";
import CustomBarcode from "../Components/CustomBarcode";
import RenderFieldSearch from "../Components/RenderFieldSearch";

class BarcodeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    duration: 1300,
    delay: 300,
    barcode: null
  };

  render() {
    const hrStyle = { alignSelf: "center" };
    const hrTextStyle = { color: Colors.text };
    return (
      <Container>
        <Content scrollEnabled={false}>
          <View style={styles.mainContainer}>
            <Animatable.View
              animation="bounceInLeft"
              duration={this.state.duration}
              useNativeDriver
              style={styles.topContainer}
            >
              <View style={styles.topBarContainer}>
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => this.props.navigate()}
                >
                  <Icon
                    size={40}
                    name="ios-arrow-round-back"
                    style={styles.arrowIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.topContainerText}>
                  Pay to
                </Text>
              </View>

              <View style={styles.searchContainer}>
                <RenderFieldSearch />
              </View>

              <Hr
                lineColor="#eee"
                thickness={1}
                textPadding={10}
                text="or"
                textStyles={hrTextStyle}
                hrStyles={hrStyle}
              />
            </Animatable.View>

            <View style={styles.container}>
              <Text style={styles.scanBarcodeText}>Scan for QR code</Text>
              <View style={styles.barcodeContainer}>
                <RNCamera
                  ref={ref => {
                    this.camera = ref;
                  }}
                  onBarCodeRead={this.props.navigate}
                  style={styles.preview}
                  type={RNCamera.Constants.Type.back}
                  permissionDialogTitle={"Permission to use camera"}
                  permissionDialogMessage={
                    "We need your permission to use your camera phone"
                  }
                >
                  <View style={styles.barcodeBorders}>
                    <CustomBarcode borderColor="limegreen" borderWidth={3} />
                  </View>
                </RNCamera>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    navigate: navigationObject => dispatch(NavigationActions.back())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BarcodeScreen);
