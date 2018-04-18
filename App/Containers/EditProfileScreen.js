import React, { Component } from "react";
import { Images, Metrics } from "../Themes";
import { View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { Container, Content, Header, Button } from "native-base";
import Icon from "react-native-vector-icons/EvilIcons";

import Tabs from "react-native-tabs";

import CitiesActions, { CitiesSelectors } from "../Redux/CitiesRedux";

import CountryListActions, {
  CountryListSelectors
} from "../Redux/CountryListRedux";

import { NavigationActions } from "react-navigation";

import Spinner from "react-native-loading-spinner-overlay";

import * as Animatable from "react-native-animatable";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/EditProfileScreenStyle";

import { Colors } from "../Themes";
import ProfileBasicForm from "../Components/ProfileBasicForm";

import ProfileContactForm from "../Components/ProfileContactForm";
import ProfileIndustriesForm from "../Components/ProfileIndustriesForm";

class EditProfileScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    page: "basic",
    title: "Edit Profile"
  };

  componentDidMount() {
    this.props.fetchCountryList();
  }

  onTabSelect = el => {
    switch (el.props.name) {
      case "basic": {
        this.setState({ page: el.props.name, title: "Edit Profile" });
        break;
      }
      case "contact": {
        this.setState({ page: el.props.name, title: "Contact Details" });
        break;
      }
      case "industries": {
        this.setState({ page: el.props.name, title: "Choose Industries" });
        break;
      }
      default: {
        break;
      }
    }
  };

  render() {
    return (
      <Container>
        <Content scrollEnabled>
          <View style={styles.mainContainer}>
            <Spinner
              visible={
                this.props.fetchingCity ||
                this.props.fetchingCountry ||
                this.props.fetchingRegister
              }
              style={{ alignSelf: "center" }}
              color={Colors.burntSienna}
              size="large"
            />
            <View style={styles.topContainer}>
              <View style={styles.headerContainer}>
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={this.props.navigateBack}
                >
                  <Icon size={25} name="close" style={styles.arrowIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{this.state.title}</Text>
              </View>
              <Tabs
                selected={this.state.page}
                style={styles.tabs}
                iconStyle={styles.tabContainer}
                selectedStyle={styles.selectedTab}
                onSelect={this.onTabSelect}
              >
                <Text style={styles.tabText} name="basic">
                  BASIC
                </Text>
                <Text style={styles.tabText} name="contact">
                  CONTACT
                </Text>
                <Text style={styles.tabText} name="industries">
                  INDUSTRIES
                </Text>
              </Tabs>
            </View>
            <View style={styles.pageContainer}>
              <View
                style={{
                  display: this.state.page == "basic" ? "flex" : "none"
                }}
              >
                <ProfileBasicForm
                  countryList={this.props.countryList}
                  onCountryPick={this.props.fetchCitiesList}
                  cityList={this.props.cityList}
                >
                  <Button
                    onPress={() =>
                      this.setState({
                        page: "contact",
                        title: "Contact Details"
                      })
                    }
                    style={styles.submitButton}
                    block
                    primary
                  >
                    <Text style={{ color: Colors.snow }}>NEXT</Text>
                  </Button>
                </ProfileBasicForm>
              </View>

              <View
                style={{
                  display: this.state.page == "contact" ? "flex" : "none"
                }}
              >
                <ProfileContactForm>
                  <Button
                    onPress={() =>
                      this.setState({
                        page: "basic",
                        title: "Edit Profile"
                      })
                    }
                    style={styles.submitButton}
                    block
                    primary
                  >
                    <Text style={{ color: Colors.snow }}>NEXT</Text>
                  </Button>
                </ProfileContactForm>
              </View>

              <View
                style={{
                  display: this.state.page == "industries" ? "flex" : "none"
                }}
              >
                <ProfileIndustriesForm>
                  <Button
                    onPress={() =>
                      this.setState({
                        page: "basic",
                        title: "Edit Profile"
                      })
                    }
                    style={styles.submitButton}
                    block
                    primary
                  >
                    <Text style={{ color: Colors.snow }}>SUBMIT</Text>
                  </Button>
                </ProfileIndustriesForm>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    countryList: CountryListSelectors.getData(state),
    cityList: CitiesSelectors.getData(state),
    fetchingCountry: CountryListSelectors.getFetching(state),
    fetchingCity: CitiesSelectors.getFetching(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCountryList: () => dispatch(CountryListActions.countryListRequest()),

    fetchCitiesList: id => {
      id != "" && dispatch(CitiesActions.citiesRequest(id));
    },

    submitForm: () => dispatch(submit("profileForm")),

    navigateBack: () => dispatch(NavigationActions.back()),

    navigate: navigationObject =>
      dispatch(NavigationActions.navigate(navigationObject))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen);
