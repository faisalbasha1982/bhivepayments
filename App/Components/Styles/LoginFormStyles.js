import EStyleSheet from "react-native-extended-stylesheet";
import { Colors, Metrics, Fonts } from "../../Themes/";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  fieldView: {
    marginVertical: Metrics.marginVertical,
    width: "100%"
  },
  fieldContainer: {
    width: "100%"
  },
  fieldItem: {
    marginLeft: 0,
  },
  label: {
    fontWeight: "normal",
    fontSize: Fonts.size.small,
    color: Colors.label,
    fontWeight: "300"
  },
  submitButton: {
    marginTop: Metrics.doubleBaseMargin,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.burntSienna
  }
});

export default styles;
