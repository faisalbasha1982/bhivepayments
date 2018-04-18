import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../Themes/";

export default StyleSheet.create({
  fieldContainer: {
    width: "100%",
    flex: 1,
  },
  fieldItem: {
    marginLeft: 0
  },
  component:{

  },
  label: {
    fontWeight: "normal",
    fontSize: Fonts.size.small,
    color: Colors.label,
    fontWeight: "300"
  }
});
