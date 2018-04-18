import EStyleSheet from "react-native-extended-stylesheet";
import {
  Metrics,
  ApplicationStyles,
  Colors,
  Fonts
} from "../../Themes/";

export default EStyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    overflow: 'hidden'
  },
  topContainer: {
    flex: 3
  },
  container: {
    ...ApplicationStyles.screen.container,
    flex: 2,
    flexDirection: "column",
    padding: Metrics.doubleBaseMargin
  },
  innerContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  titleContainer: {
    marginBottom: Metrics.doubleBaseMargin,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  title: {
    ...Fonts.style.normalLight,
    color: Colors.loginText,
    fontSize: Fonts.size.small
  },
  iconsContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  test: {
    flex: 1,
    marginRight: Metrics.baseMargin
  },
  queueContainer:{
    flex: 1,
    flexWrap: "wrap",
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  topBarContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    padding: Metrics.doubleBaseMargin
  },
  thumbnail: {
    borderWidth: 2,
    borderColor: Colors.snow,
  },
  svgThumbnailContainer: {
    flex: 1
  },
  svgThumbnail: {
    height: '100%',
    width: '100%'
  },
  name: {
    ...Fonts.style.normalLight,
    fontWeight: '400',
    paddingHorizontal: Metrics.baseMargin,
    flex: 8,
    textAlign: "left"
  },
  bellIcon: {
    flex: 1,
    color: Colors.snow
  },
  payButtonContainer: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center"
  },
  payButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: Colors.snow,
    borderRadius: 100/2
  },
  payButtonText: {
    fontSize: 18,
    fontFamily: Fonts.type.openSans,
    fontWeight: 'bold',
    color: Colors.burntSienna,
  },
  showQRContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center"
  },
  QRButton: {
    ...ApplicationStyles.testBorder,
    borderWidth: 0,
    backgroundColor: '#FFFFFF15',
    padding: 10
  },
  QRText: {
    ...Fonts.style.normalLight,
    fontSize: Fonts.size.small
  }
});
