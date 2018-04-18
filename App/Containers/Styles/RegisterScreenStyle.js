import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  mainContainer: {
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    backgroundColor: Colors.snow,
    justifyContent: 'flex-start',
    minHeight: Metrics.screenHeight
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    flex: 1
  },
  arrowIcon: {
    color: Colors.burntSienna
  },
  headerTitle: {
    color: Colors.burntSienna,
    textAlign: 'center',
    flex: 9,
    fontSize: Fonts.size.h4,
    fontFamily: Fonts.type.emphasis
  },
  formContainer: {
    flex: 9,
    justifyContent: 'flex-start'
  },
  submitButton: {
    marginTop: Metrics.baseMargin,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.burntSienna
  },
  termsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: Metrics.baseMargin
  },
  termsText: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    color: Colors.drawer,
    textAlign: 'center',
    flexWrap: 'wrap',
    width: '90%'
  }
})
