import { StyleSheet } from "react-native";
import { ApplicationStyles, Colors, Metrics, Fonts } from "../../Themes/";

export default StyleSheet.create({
  fieldContainer: {
    width: "100%",
    flex: 1
  },
  fieldItem: {
    marginLeft: 0
  },
  label: {
    fontWeight: "normal",
    fontSize: Fonts.size.small,
    color: Colors.label,
    fontWeight: "300",
    paddingTop: Metrics.baseMargin
  },
  headerStyle: {},
  itemTextStyle: {}
});
