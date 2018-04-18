import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";
import LoginScreen from "../Containers/LoginScreen";
import RegisterScreen from "../Containers/RegisterScreen";
import OTPScreen from "../Containers/OTPScreen";

// Manifest of possible screens
const SignedOutNav = StackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    RegisterScreen: { screen: RegisterScreen },
    OTPScreen: { screen: OTPScreen }
  },
  {
    // Default config for all screens
    initialRouteName: "LoginScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default SignedOutNav;
