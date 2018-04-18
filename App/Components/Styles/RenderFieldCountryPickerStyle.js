import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../Themes/";

export default StyleSheet.create({
  fieldContainer: {
    width: "100%",
    flex: 1,
  },
  fieldItem: {
    marginLeft: 0,
    padding: 0
  },
  label: {
    fontWeight: "normal",
    fontSize: Fonts.size.small,
    color: Colors.label,
    fontWeight: "300",
    paddingTop: Metrics.baseMargin
  },
  callingCode: { fontSize: 18, paddingLeft: Metrics.baseMargin },
  icon: {
    paddingHorizontal: Metrics.baseMargin,
    opacity: 0.75
  },
  input: {
  },
  countryPicker: {}
});
