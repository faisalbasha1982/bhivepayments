import { Metrics, ApplicationStyles, Colors, Fonts } from "../../Themes/";

import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    backgroundColor: Colors.burntSienna,
    height: Metrics.screenHeight
  },
  topContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    padding: Metrics.doubleBaseMargin,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  headerContainer: {
    width: "50%",
    flex: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  headerLeftContainer: {
    flex: 1,
    alignItems: "center"
  },
  headerLeftLogo: {
    resizeMode: "contain",
    height: "100%",
    aspectRatio: 0.9
  },
  headerRightContainer: {
    flex: 2,
    height: "100%",
    marginLeft: Metrics.smallMargin,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "center"
  },
  headerRightLogo: {
    resizeMode: "stretch"
  },
  headerRightTextContainer: {
    marginTop: 5
  },
  headerRightText: {
    flex: 2,
    color: Colors.snow,
    fontSize: Fonts.size.h3,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headerRightPayContainer:{
    flex: 1,
    marginVertical: Metrics.smallMargin,
    marginLeft: 2,
    backgroundColor: Colors.snow,
    borderRadius: 2,
    width: '30%'
  },
  headerRightPayText: {
    fontFamily: Fonts.type.openSans_semiBold,
    color: Colors.burntSienna,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 11
  },
  topTextContainer: {
    flex: 4,
    justifyContent: "flex-end"
  },
  topText: {
    ...Fonts.style.normalLight,
    fontSize: Fonts.size.h5
  },
  container: {
    flex: 4,
    padding: Metrics.doubleBaseMargin,
    width: "100%",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    flexDirection: "column",
    backgroundColor: Colors.silver
  },
  loginText: {
    ...Fonts.style.h5,
    flex: 1,
    marginVertical: Metrics.baseMargin,
    color: Colors.drawer,
    fontWeight: 'normal',
    fontFamily: Fonts.type.openSans_light
  },
  registerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrics.doubleBaseMargin
  },
  forgotPassword:{
    ...Fonts.style.normalLight,
    color: Colors.burntSienna,
    fontSize: Fonts.size.small,
    fontWeight: 'bold'
  },
  newToBhive:{
    ...Fonts.style.normalLight,
    fontSize: Fonts.size.small,
    fontWeight: 'bold',
    color: Colors.loginText,
    opacity: 0.6
  },
  signUp:{
    ...Fonts.style.normalLight,
    color: Colors.burntSienna,
    fontSize: Fonts.size.small,
    fontWeight: 'bold'
  },
  form: {
    flex: 5
  },
  submitButton: {
    marginTop: Metrics.doubleBaseMargin,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.burntSienna
  },
  logo: {
    resizeMode: "contain",
    flex: 1
  },
  centered: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "100%"
  },
  button: {
    marginVertical: Metrics.baseMargin
  },
  buttonText: {
    color: Colors.text,
    textAlign: "center",
    flex: 9
  },
  authButton: {
    marginVertical: Metrics.baseMargin
  },
  facebookButton: {
    backgroundColor: "#4267B2",
    borderColor: "#4267B2",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 3
  },
  iconLeft: {
    flex: 1,
    textAlign: "center",
    paddingLeft: 10
  },
  googleButton: {
    borderRadius: 3,
    borderColor: Colors.label,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  googleButtonText: {
    flex: 9,
    textAlign: 'center',
    color: Colors.windowTint
  },
  googleIconLeft: {
    flex: 1,
    marginLeft: 10,
    aspectRatio: 1,
    resizeMode: 'contain'
  }
});

export default styles;
