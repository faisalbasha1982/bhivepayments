import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from "../../Themes/";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  thumbnail: {},
  name: {
    ...Fonts.style.normalLight,
    fontSize: 10,
    color: Colors.drawer,
    textAlign: 'center'
  }
});
