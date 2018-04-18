import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right
} from "native-base";
import * as Animatable from "react-native-animatable";
import PropTypes from "prop-types";

ManifestCardAnimated = Animatable.createAnimatableComponent(Card);

class ManifestCard extends Component {
  render() {
    const { data, animation } = this.props;
    return (
      <ManifestCardAnimated animation={animation}>
        <CardItem>
          <Icon active name="logo-googleplus" />
          <Text>Google Plus</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </ManifestCardAnimated>
    );
  }
}

ManifestCard.propTypes = {
  data: PropTypes.object.isRequired,
  animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

ManifestCard.defaultProps = {
  animation: "fadeIn"
};

export default ManifestCard;
