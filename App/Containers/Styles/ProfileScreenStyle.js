import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from "../../Themes/";

const styles = StyleSheet.create({

    container: {
        minHeight: Metrics.screenHeight,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },

    newBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    newText: {
        flex: 1,
        fontSize: 15,
        color: 'black'
    }

});

export default styles;