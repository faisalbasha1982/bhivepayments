import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";

import SignedInNav from "./SignedInNavigation";
import SignedOutNav from "./SignedOutNavigation";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    SignedIn: {
      screen: SignedInNav,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    SignedOut: {
      screen: SignedOutNav,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    // Default config for all screens
    initialRouteName: "SignedIn",
    mode: "card",
    headerMode: "none"
  }
);

export default PrimaryNav;
