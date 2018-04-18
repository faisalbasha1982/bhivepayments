import React, { Component } from "react";
import PropTypes from "prop-types";
import { View,Text } from "react-native";

import styles from "./Styles/BarcodeImageStyles";
import { Colors } from "../Themes";

import ZoomImage from 'react-native-zoom-image';
import {Easing} from 'react-native';


const BarcodeImage = ({barcodeImage}) => {
    return (

        <View style={styles.container}>
            <Text style={styles.qrText}>MY QR CODE</Text>
                <View style={styles.imageBarCode}>
                    <ZoomImage source={{uri: barcodeImage}}
                               imgStyle={{width: 160, height: 160,}}
                               style={styles.img}
                               duration={200}
                               enableScaling={false}
                               easingFunc={Easing.linear}/>
                </View>
                <View style={styles.tapTextView}>
                    <Text style={styles.tapText}>TAP TO VIEW YOUR QR CODE</Text>
                </View>
        </View>

    );
}


export default BarcodeImage;