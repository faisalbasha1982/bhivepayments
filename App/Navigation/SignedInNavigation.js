import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";
import HomeScreen from "../Containers/HomeScreen";
import BarcodeScreen from "../Containers/BarcodeScreen";
import EditProfileScreen from "../Containers/EditProfileScreen";
import TransactionHistoryScreen from "../Containers/TransactionHistoryScreen";
import ProfileScreen from "../Containers/ProfileScreen";

// Manifest of possible screens
const SignedInNav = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    BarcodeScreen: { screen: BarcodeScreen },
    EditProfileScreen: { screen: EditProfileScreen },
    TransactionHistoryScreen: { screen: TransactionHistoryScreen },
    ProfileScreen: { screen: ProfileScreen }
}, {
    // Default config for all screens
    initialRouteName: "ProfileScreen",
    navigationOptions: {
        headerStyle: styles.header
    }
});

export default SignedInNav;