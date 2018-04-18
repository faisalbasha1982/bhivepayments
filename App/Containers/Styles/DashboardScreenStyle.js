import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors } from "../../Themes/";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.windowTint
  },
  centered: {
    alignItems: "center",
    paddingVertical: Metrics.smallMargin,
    flex: 0.15
  },
  listContainer: {
    width: '90%',
    alignSelf: 'center',
    padding: Metrics.smallMargin,
    flex: 0.85,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10, 
    backgroundColor: 'white'
  }
});
