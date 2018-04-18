import EStyleSheet from "react-native-extended-stylesheet";
import { Metrics, ApplicationStyles, Colors, Fonts } from "../../Themes/";

export default EStyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: "black"
  },
  topContainer: {
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: Metrics.doubleBaseMargin,
    flex: 2
  },
  container: {
    flex: 7,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  topBarContainer: {
    flex: 1,
    width: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  arrowIcon: {
    color: Colors.text
  },
  topContainerText: {
    ...Fonts.style.normalLight,
    color: Colors.text
  },
  searchContainer: {
    flex: 1,
    width: "100%",
    marginVertical: Metrics.baseMargin
  },
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
  },
  scanBarcodeText: {
    ...Fonts.style.openSans_light,
    fontSize: Fonts.size.regular,
    color: Colors.text,
    marginVertical: Metrics.smallMargin,
    flex: 2,
    textAlign: "center"
  },
  barcodeContainer: {
    ...ApplicationStyles.testBorder,
    flex: 18,
    alignItems: "stretch",
    opacity: 0.5,
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  preview: {
    ...ApplicationStyles.testBorder,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  barcodeBorders: {
    height: "60%",
    width: "75%",
    alignSelf: "center",
    opacity: 1,
    backgroundColor: 'rgba(255,255,255,0.3)'
  }
});
