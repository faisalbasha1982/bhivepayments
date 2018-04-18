import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

import { FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/EvilIcons";

import styles from "./Styles/ProfileStyles";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import ZoomImage from 'react-native-zoom-image';
import { Easing } from 'react-native';

/******************** Bar Code imports *****************************/
import { RNCamera } from "react-native-camera";
import CustomBarcode from "../Components/CustomBarcode";
import RenderFieldSearch from "../Components/RenderFieldSearch";
/******************************************************************/

const viewportHeight = Dimensions.get('window').height;
const viewportWidth = Dimensions.get('window').width;

class ProfileComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            picture: {
                thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
            }
        }
    }


    render() {
        return (
                <View style={styles.container}>                                        
                    <View style={styles.profileContainer}>
                            <TouchableOpacity style = { styles.iconContainer } onPress = { this.props.navigateBack }>
                                    <Icon size = { 25 } name = "close" style = { styles.arrowIcon }/> 
                            </TouchableOpacity>

                            <View style={styles.imgProfile}>
                                <Image source={{ uri: this.state.picture.thumbnail }} style={styles.userIcon} />

                                  <View style={styles.userBlock}>
                                     <Text style={styles.profileName}>Mason Perez</Text>
                                     <Text style={styles.profileUsername}>mason.pero68</Text>
                                 </View>
                            </View>
                    </View>
                    <View style={styles.lineStyle}/>

                     <View style={styles.settingStyle}>
                    
                     <View style={styles.profileView}>
                     <TouchableOpacity onPress={()=>{this.props.navigate({routeName:''})}}>
                         <Image source={{ uri: this.state.picture.thumbnail }} style={styles.profileIcon} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={()=>{this.props.navigate({routeName:''})}}>
                         <Text style={styles.profileText}>My Profile</Text>
                     </TouchableOpacity>
                     </View>

                     <View style={styles.TransactionView}>
                     <TouchableOpacity onPress={()=>{this.props.navigate({routeName:'TransactionHistoryScreen'})}}>                    
                             <Image source={{ uri: this.state.picture.thumbnail }} style={styles.TransactionIcon} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={()=>{this.props.navigate({routeName:'TransactionHistoryScreen'})}}>                    
                             <Text style={styles.TransactionHistoryText}>Transaction History</Text>
                     </TouchableOpacity>
                     </View>

                     <View style={styles.logOut}>
                         <Image source={{ uri: this.state.picture.thumbnail }} style={styles.logOutIcon} />
                         <Text style={styles.logOutText}>Log Out</Text>
                     </View>

                     <View style={styles.lineStyle} />                  

                    </View>

                </View>

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

        resetNavigate: navigationObject => dispatch(NavigationActions.reset(navigationObject)),
        navigate: navigationObject => dispatch(NavigationActions.navigate(navigationObject)),
        navigateBack: () => dispatch(NavigationActions.back()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);