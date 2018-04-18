import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { startSubmit } from "redux-form";
import { Container, Content, Header, Text, Button, Spinner } from "native-base";
import { connect } from "react-redux";
import { Colors } from "../Themes";
import ManifestCard from "../Components/ManifestCard";
// Styles
import styles from "./Styles/DashboardScreenStyle";
import ManifestActions from "../Redux/ManifestRedux";

export class DashboardScreen extends Component {
  static navigationOptions = {
    title: "Dashboard"
  };

  componentWillMount() {
    console.tron.log(JSON.stringify(this.props));
    this.props.nav;
  }

  render() {
    const {
      login: { username },
      manifests: { isFetching, manifests },
      getManifests,
      removeManifest
    } = this.props;

    const animation = {
      animationIn: "fadeIn",
      animationOut: "fadeOut"
    };

    return (
      <Container>
        <Content contentContainerStyle={styles.mainContainer}>
          <View style={styles.mainContainer}>
            <View style={styles.container}>
              <View style={styles.centered}>
                {isFetching ? (
                  <Spinner
                    style={{ alignSelf: "center" }}
                    color={Colors.fire}
                  />
                ) : (
                  <View>
                    <Text>Welcome {username}</Text>
                    <Button
                      style={{ alignSelf: "center" }}
                      onPress={getManifests}
                    >
                      <Text>Fetch manifests</Text>
                    </Button>
                  </View>
                )}
              </View>
              <View style={styles.listContainer}>
                <FlatList
                  style={{ width: "100%" }}
                  data={manifests}
                  renderItem={({ item }) => <ManifestCard key={item.id} />}
                  keyExtractor={(item, index) => index}
                />
              </View>
              <Button small primary onPress={() => removeManifest(103)}>
                <Text>Remove Item</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
    manifests: state.manifests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getManifests: () => {
      dispatch(ManifestActions.fetchManifests());
    },
    removeManifest: id => dispatch(ManifestActions.removeManifest(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
