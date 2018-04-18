import { StyleSheet } from "react-native";
import { Colors } from "../../Themes";
import { horizontalMargin, slideWidth, itemHeight, itemWidth } from "../TransactionHistory";

const styles = StyleSheet.create({

    textBelow: {
        color: 'black',
        marginTop: 10,
        marginLeft: 15
    },

    renderSeparator: {
        height: 1,
        width: "86%",
        backgroundColor: "#ffffff",
        marginLeft: "14%"
    },

    carouselStyle: {
        flex: 1,
        paddingBottom: 0,
        marginBottom: 0,
        paddingTop: 30,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1
    },

    lineStyle: {
        height: 1,
        width: "72%",
        backgroundColor: "#333333",
        marginLeft: "14%",
        marginRight: "14%"
    },

    viewStyle: {
        flex: 2,
        backgroundColor: 'white'
    },

    containerStyle: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginLeft: 10
    },

    subTitle: {
        fontSize: 15,
        fontWeight: 'normal',
        marginLeft: 15
    },

    flTitle: {
        fontSize: 20,
        fontWeight: 'normal',
        marginLeft: 15
    },

    timeText: {
        fontSize: 15,
        fontWeight: 'normal',
        marginRight: 10
    },

    imageContainer: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
    },

    imageContainerNormal: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
    },

    imageNormal: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        borderColor: 'white',
        borderWidth: 0,
        borderStyle: 'solid'
    },

    image: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        borderColor: '#EC2E08',
        borderWidth: 8,
        borderStyle: 'solid'
    },
    title: {
        width: 40,
        height: 40,
        fontWeight: 'bold',
        color: 'black'
    },

    item: {
        width: itemWidth,
        height: itemHeight,
        paddingHorizontal: horizontalMargin,
        borderRadius: 120 / 2,
    },

    itemNormal: {
        width: itemWidth,
        height: itemHeight,
        paddingHorizontal: horizontalMargin,
        borderRadius: 120 / 2,

    },
    slideInnerContainer: {
        width: slideWidth,
        height: slideWidth,
        borderRadius: slideWidth / 2,
        flex: 1,
    },

    slideInnerContainerNormal: {
        width: slideWidth,
        height: slideWidth,
        borderRadius: slideWidth / 2,
        flex: 1,
    }

})