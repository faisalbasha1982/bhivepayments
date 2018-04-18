import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from "../../Themes/";
import {
    slideWidth,
    horizontalMargin,
    itemHeight,
    itemWidth,
    viewportHeight,
    viewportWidth
} from "../ProfileComponent";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    topHeader: {
        width: viewportWidth,
        height: viewportHeight,
        backgroundColor: 'white',
    },

    iconContainer: {
        flex: 1,
        marginRight: Metrics.baseMargin,
        paddingTop: 10,
        paddingLeft: 10
    },

    iconView: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    iconInnerView: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    arrowIcon: {
        color: Colors.burntSienna,
        textAlign: "center"
    },

    lineStyle: {
        height: 1,
        width: "72%",
        backgroundColor: "lightgrey",
        marginLeft: "14%",
        marginRight: "14%"
    },

    profileBlock: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
    },

    userIcon: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },

    userBlock: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingLeft: 25,
    },

    profileName: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    profileUsername: {
        fontSize: 13,
        fontWeight: 'bold'
    },

    profileView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 150,
        height: 10,
        marginLeft: 25,
        paddingLeft: 25,
    },

    empty: {
        flex: 20,
    },

    profileIcon: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2
    },

    profileText: {
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },

    profileContainer: {
        flex: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    settingStyle: {
        flex: 17,

        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginVertical: Metrics.baseMargin
    },

    imgProfile: {
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 80
    },

    TransactionView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: Metrics.doubleBaseMargin,
        width: 250,
        height: 10,
        paddingLeft: 25,
        marginLeft: 25,
    },

    TransactionIcon: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2
    },

    TransactionHistoryText: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 10,
    },

    logOut: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 250,
        height: 10,
        paddingLeft: 25,
        marginLeft: 25,
        marginBottom: 10
    },

    logOutIcon: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2
    },

    logOutText: {
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },


});

export default styles;