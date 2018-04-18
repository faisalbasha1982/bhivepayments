import EStyleSheet from "react-native-extended-stylesheet";
import { ApplicationStyles, Colors, Metrics, Fonts } from "../../Themes/";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  fieldView: {
    marginVertical: Metrics.marginVertical,
    width: "100%"
  },
  nameContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  submitButton: {
    marginTop: Metrics.doubleBaseMargin,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.burntSienna
  },
  checkboxContainer: {
    marginVertical: Metrics.marginVertical,
    flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkbox: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxLabel: {
    textAlign: 'center',
    marginHorizontal: Metrics.marginHorizontal,
    color: Colors.drawer,
    fontWeight: '300',
    fontFamily: Fonts.type.openSans
  }
});

export default styles;
