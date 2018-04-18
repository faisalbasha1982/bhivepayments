import { ApplicationStyles, Colors, Metrics, Fonts } from "../../Themes/";

import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  mainContainer: {
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    backgroundColor: Colors.snow,
    justifyContent: "flex-start",
    minHeight: Metrics.screenHeight
  },
  topContainer: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Metrics.baseMargin
  },
  iconContainer: {
    flex: 1,
    marginRight: Metrics.baseMargin
  },
  arrowIcon: {
    color: Colors.burntSienna,
    textAlign: "center"
  },
  headerTitle: {
    color: Colors.drawer,
    textAlign: "auto",
    flex: 9,
    fontSize: Fonts.size.h5
  },
  tabs: {
    backgroundColor: Colors.snow,
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative"
  },
  tabContainer: {
    flex: 0,
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  selectedTab: {
    color: Colors.burntSienna,
    borderBottomWidth: 1,
    borderBottomColor: Colors.burntSienna
  },
  tabText: {
    paddingBottom: Metrics.baseMargin
  },
  pageContainer: {
    flex: 10
  },
  submitButton: {
    marginTop: Metrics.doubleBaseMargin,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.burntSienna
  }
});
