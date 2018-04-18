import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
    },

    qrText: {
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },

    imageBarCode: {
        flex: 6,
        marginLeft: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 0,
        alignItems: 'flex-start'
    },

    tapTextView: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    tapText: {
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default styles;