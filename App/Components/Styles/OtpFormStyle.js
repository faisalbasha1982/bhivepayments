import {
  StyleSheet
} from 'react-native'
import {
  ApplicationStyles,
  Fonts,
  Metrics,
  Colors
} from "../../Themes/";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  otpContainer: {
    
  },
  inputContainer: {
    backgroundColor: Colors.white,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    width: 60
  },
  errorMessageContainer: {
    margin: 0,
    marginTop: 0
  },
  errorMessageText: {
    height: 0,
    width: 0
  },
  input: {
    color: Colors.drawer,
    fontFamily: Fonts.type.openSans_light,
    width: '100%'
  }
});
