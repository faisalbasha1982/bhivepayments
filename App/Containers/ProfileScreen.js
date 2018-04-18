import React, { Component } from "react";
import { Images, Metrics } from "../Themes";
import LoginActions, { LoginSelectors } from "../Redux/LoginRedux";
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";
import { Container, Content, Header, Text, Button } from "native-base";

import { submit } from "redux-form";
import Icon from "react-native-vector-icons/FontAwesome";
import Hr from "react-native-hr-component";
import { connect } from "react-redux";
import { LoginButton, AccessToken, LoginManager } from "react-native-fbsdk";
import { NavigationActions } from "react-navigation";

import ProfileComponent from "../Components/ProfileComponent";
import BarcodeImage from "../Components/BarcodeImage";
import CarouselComponent from "../Components/CarouselComponent";

// Styles
import styles from "./Styles/ProfileScreenStyle";
import * as Animatable from "react-native-animatable";
import Config from "react-native-config";

class ProfileScreen extends Component {

    static navigationOptions = {
        header: null
    };

   
    render() {
        const hrStyle = { marginVertical: Metrics.baseMargin };
        return (
<Container>
    <Content scrollEnabled>
                    <View  style={styles.container}>
                            <ProfileComponent style={{flex: 1}}/>
                             <CarouselComponent style={{flex: 8}}/>
                            <BarcodeImage style={{flex: 1}} barcodeImage='https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'/> 
                    </View>
                    </Content>
                    </Container>

        );
    }
}

const mapStateToProps = state => {
    return {
        //fetching: LoginSelectors.getFetching(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // loginAction: ({ username, password }) =>
        //     dispatch(LoginActions.loginRequest(username, password)),

        // resetNavigate: navigationObject =>
        //     dispatch(NavigationActions.reset(navigationObject)),

        // navigate: navigationObject =>
        //     dispatch(NavigationActions.navigate(navigationObject)),

        // submitForm: () => dispatch(submit("loginForm"))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);