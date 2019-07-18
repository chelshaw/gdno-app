import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  Body,
  Header,
  SectionTitle,
  TextHeader,
  DetailHeader,
} from './Type';
import Paper from './Paper';
import StandardModal from './StandardModal';
import Touchable from './Touchable';
import { space, padded, careGuideStyles } from '../constants/Styles';
import COLORS from '../constants/Colors';
import FeatureBox from './FeatureBox';
import { allFeatures } from '../constants/constants';

const ss = StyleSheet.create({
  ...careGuideStyles,
  padded,
  featuresContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  }
});

class CareGuideEssentials extends Component {
  state = {
    isFeatureDetailsModalOpen: false,
    featureDetails: {
      content: '',
      title: '',
      category: '',
    }
  }

  renderTTH = (tth) => {
    let qty = tth;
    let time = 'days';
    if (tth > 30) {
      qty = Math.round(tth / 30);
      time = 'months';
    } else if (tth > 7) {
      qty = Math.round(tth / 7);
      time = 'weeks';
    }

    if (!tth) return null;
    return (
      <Paper style={{ paddingVertical: space[3] }}>
        <DetailHeader align="center" color="grass" weight="light">{qty.toString()}</DetailHeader>
      </Paper>
    );
  };

  onClickFeature = (category) => {
    const { info } = this.props;
    const { text, details } = allFeatures[category][info[category]];
    this.setState({
      isFeatureDetailsModalOpen: true,
      featureDetails: {
        title: text,
        category: `${info.Herb} • ${category}`,
        content: details,
      }
    });
  }

  renderFeatures = info => (
    <View style={ss.featuresContainer}>
      {info.pet && (
        <Touchable onPress={this.onClickFeature} returnKey="pet">
          <View><FeatureBox category="pet" feature={info.pet} /></View>
        </Touchable>
      )}
      {info.frost && (
        <Touchable onPress={this.onClickFeature} returnKey="frost">
          <View><FeatureBox category="frost" feature={info.frost} /></View>
        </Touchable>
      )}
      {info.lifespan && (
        <Touchable onPress={this.onClickFeature} returnKey="lifespan">
          <View><FeatureBox category="lifespan" feature={info.lifespan} /></View>
        </Touchable>
      )}
      {info.sun && (
        <Touchable onPress={this.onClickFeature} returnKey="sun">
          <View><FeatureBox category="sun" feature={info.sun} /></View>
        </Touchable>
      )}
      {info.thirstiness && (
        <Touchable onPress={this.onClickFeature} returnKey="thirstiness">
          <View><FeatureBox category="water" feature={info.thirstiness} /></View>
        </Touchable>
      )}
      {info.soil && (
        <Touchable onPress={this.onClickFeature} returnKey="soil">
          <View><FeatureBox category="soil" feature={info.soil} /></View>
        </Touchable>
      )}
    </View>
  );

  render() {
    const { info } = this.props;
    const {
      isFeatureDetailsModalOpen,
      featureDetails,
    } = this.state;
    if (!info) return <ActivityIndicator />;

    return (
      <View style={{ backgroundColor: COLORS.offWhite }}>
        {info.overview
          && (
          <View style={ss.topSection}>
            <Header>Essentials</Header>
            <Body>{info.overview}</Body>
          </View>
          )
        }
        <View style={ss.section}>
          <View style={ss.titleSpacing}>
            <SectionTitle uppercase color="medGray">How long till the harvest?</SectionTitle>
          </View>
          {this.renderTTH(info.timeToHarvest)}
        </View>
        <View style={ss.section}>
          <View style={ss.titleSpacing}>
            <SectionTitle uppercase color="medGray">Features</SectionTitle>
          </View>
          {this.renderFeatures(info)}
        </View>
        <StandardModal
          visible={isFeatureDetailsModalOpen}
          onClose={() => this.setState({ isFeatureDetailsModalOpen: false })}
          title={featureDetails.category}
        >
          <View style={padded}>
            <Header>{featureDetails.title}</Header>
            <Body>{featureDetails.content}</Body>
          </View>
        </StandardModal>
      </View>
    );
  }
}

CareGuideEssentials.propTypes = {
  info: PropTypes.object,
};

export default CareGuideEssentials;
