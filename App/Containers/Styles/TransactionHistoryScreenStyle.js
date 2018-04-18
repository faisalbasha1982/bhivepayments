import { StyleSheet } from "react-native";
import { Colors } from "../../Themes";
import { horizontalMargin, slideWidth, itemHeight, itemWidth, width, height } from "../TransactionHistoryScreen";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    topHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },

    transactionHistoryText: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 25,
        fontSize: 20,
        color: '#333333'
    },

    itemName: {
        fontSize: 15,
        fontWeight: 'normal',
        marginLeft: 15,
    },

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
        flex: 8,
        paddingBottom: 0,
        marginBottom: 0,
        paddingTop: 10,
        backgroundColor: 'white',
    },

    viewStyle: {
        flex: 11,
        backgroundColor: 'white'
    },

    lineStyle: {
        height: 1,
        width: "72%",
        backgroundColor: "lightgrey",
        marginLeft: "14%",
        marginRight: "14%"
    },

    containerStyle: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginLeft: 10,
        backgroundColor: 'white'
    },

    subTitle: {
        fontSize: 15,
        fontWeight: 'normal',
        //item.name.last.includes("Failed") ? '#EC2E08' : '#47C3B2'
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
        borderColor: Colors.Failed,
        borderStyle: 'solid',
        borderWidth: 8
    },

    image: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        borderColor: Colors.Failed,
        borderStyle: 'solid',
        borderWidth: 8
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
export default styles;