import React, { Component } from "react";
import { Images, Metrics, Colors } from "../Themes";
import { View, ScrollView, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Header,
  Text,
  Button,
  Thumbnail,
  Spinner
} from "native-base";

import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

import * as Animatable from "react-native-animatable";

import { FileExtension } from "../Lib/Utilities";

import Image from "react-native-remote-svg";

// Styles
import styles from "./Styles/HomeScreenStyle";
import ShopIconWithName from "../Components/ShopIconWithName";
import { PermissionsAndroid } from "react-native";

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    duration: 500,
    delay: 300,
    profilePicLoaded: false
  };

  async componentDidMount() {
    console.tron.log(`user is ${JSON.stringify(this.props.user, null, 2)}`);
    console.tron.log(
      `File extension is ${FileExtension(this.props.user.profilePic)}`
    );
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures."
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    const { user } = this.props;
    return (
      <Container>
        <Content scrollEnabled={false}>
          <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
              <Animatable.View
                animation="fadeInLeft"
                duration={this.state.duration}
                useNativeDriver
                style={styles.topBarContainer}
              >
                {FileExtension(this.props.user.profilePic) == "svg" ? (
                  <View style={styles.svgThumbnailContainer}>
                    <Image
                      style={styles.svgThumbnail}
                      source={{
                        uri: this.props.user.profilePic
                      }}
                    />
                  </View>
                ) : (
                  <Thumbnail
                    small
                    source={{ uri: this.props.user.profilePic }}
                    style={styles.thumbnail}
                  />
                )}

                <Text style={styles.name}>
                  {user.firstName} {user.lastName}
                </Text>
                <Icon name="bell-o" size={25} style={styles.bellIcon} />
              </Animatable.View>
              <Animatable.View
                delay={this.state.duration}
                animation="zoomIn"
                useNativeDriver
                easing="ease-in-out-back"
                style={styles.payButtonContainer}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigate({
                      routeName: "BarcodeScreen"
                    })
                  }
                  style={styles.payButton}
                >
                  <Text style={styles.payButtonText}>PAY</Text>
                </TouchableOpacity>
              </Animatable.View>
              <Animatable.View
                animation="fadeInLeft"
                duration={this.state.duration}
                useNativeDriver
                style={styles.showQRContainer}
              >
                <View>
                  <Button style={styles.QRButton} small rounded transparent>
                    <Text style={styles.QRText} uppercase={false}>
                      Show my QR code
                    </Text>
                  </Button>
                </View>
              </Animatable.View>
            </View>
            <Animatable.View
              animation="fadeInUp"
              useNativeDriver
              duration={this.state.duration}
              style={styles.container}
            >
              <View style={styles.innerContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title} uppercase={false}>
                    Accepted
                  </Text>
                </View>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={styles.iconsContainer}
                >
                  <Animatable.View
                    animation="fadeIn"
                    duration={this.state.duration}
                    delay={this.state.duration / 2 + this.state.delay * 0}
                    style={styles.test}
                  >
                    <ShopIconWithName
                      imageSource={Images.launch}
                      name="Mohanned Hassan"
                    />
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeIn"
                    duration={this.state.duration}
                    delay={this.state.duration / 2 + this.state.delay * 1}
                    style={styles.test}
                  >
                    <ShopIconWithName
                      imageSource={Images.launch}
                      name="Mohanned Hassan"
                    />
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeIn"
                    duration={this.state.duration}
                    delay={this.state.duration / 2 + this.state.delay * 2}
                    style={styles.test}
                  >
                    <ShopIconWithName
                      imageSource={Images.launch}
                      name="Mohanned Hassan"
                    />
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeIn"
                    duration={this.state.duration}
                    delay={this.state.duration / 2 + this.state.delay * 3}
                    style={styles.test}
                  >
                    <ShopIconWithName
                      imageSource={Images.launch}
                      name="Mohanned Hassan"
                    />
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeIn"
                    duration={this.state.duration}
                    delay={this.state.duration / 2 + this.state.delay * 4}
                    style={styles.test}
                  >
                    <ShopIconWithName
                      imageSource={Images.launch}
                      name="Mohanned Hassan"
                    />
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeIn"
                    duration={this.state.duration}
                    delay={this.state.duration / 2 + this.state.delay * 5}
                    style={styles.test}
                  >
                    <ShopIconWithName
                      imageSource={Images.launch}
                      name="Mohanned Hassan"
                    />
                  </Animatable.View>
                </ScrollView>
              </View>

              <View style={styles.innerContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title} uppercase={false}>
                    In Queue
                  </Text>
                </View>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={styles.iconsContainer}
                >
                  <Animatable.View
                    animation="fadeIn"
                    duration={this.state.duration}
                    delay={this.state.duration / 2 + this.state.delay * 0}
                    style={styles.test}
                  >
                    <ShopIconWithName
                      imageSource={Images.launch}
                      name="Mohanned Hassan"
                    />
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeIn"
                    duration={this.state.duration}
                    delay={this.state.duration / 2 + this.state.delay * 1}
                    style={styles.test}
                  >
                    <ShopIconWithName
                      imageSource={Images.launch}
                      name="Mohanned Hassan"
                    />
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeIn"
                    duration={this.state.duration}
                    delay={this.state.duration / 2 + this.state.delay * 2}
                    style={styles.test}
                  >
                    <ShopIconWithName
                      imageSource={Images.launch}
                      name="Mohanned Hassan"
                    />
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeIn"
                    duration={this.state.duration}
                    delay={this.state.duration / 2 + this.state.delay * 3}
                    style={styles.test}
                  >
                    <ShopIconWithName
                      imageSource={Images.launch}
                      name="Mohanned Hassan"
                    />
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeIn"
                    duration={this.state.duration}
                    delay={this.state.duration / 2 + this.state.delay * 4}
                    style={styles.test}
                  >
                    <ShopIconWithName
                      imageSource={Images.launch}
                      name="Mohanned Hassan"
                    />
                  </Animatable.View>

                  <Animatable.View
                    animation="fadeIn"
                    duration={this.state.duration}
                    delay={this.state.duration / 2 + this.state.delay * 5}
                    style={styles.test}
                  >
                    <ShopIconWithName
                      imageSource={Images.launch}
                      name="Mohanned Hassan"
                    />
                  </Animatable.View>
                </ScrollView>
              </View>
            </Animatable.View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    navigate: navigationObject =>
      dispatch(NavigationActions.navigate(navigationObject))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
