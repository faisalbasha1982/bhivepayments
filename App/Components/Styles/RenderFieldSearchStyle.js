import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from "../../Themes/";

export default StyleSheet.create({
  searchItem: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0,
    backgroundColor: Colors.snow
  },
  searchIcon: {
    padding: Metrics.baseMargin,
    color: Colors.drawer
  },
  searchInput: {
    padding: Metrics.baseMargin,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.openSans_light,
    borderWidth: 0,
    color: Colors.drawer
  }
});
