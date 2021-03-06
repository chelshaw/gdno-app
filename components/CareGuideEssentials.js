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
  DetailHeader,
} from './Type';
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
  },
  timeToHarvest: {
    paddingVertical: space[3],
    borderWidth: 1,
    borderColor: COLORS.lightGray,
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

  onClickFeature = (category) => {
    const { info } = this.props;
    const { text, detailKey } = allFeatures[category][info[category]];
    this.setState({
      isFeatureDetailsModalOpen: true,
      featureDetails: {
        title: text,
        category: `${info.Herb} • ${category}`,
        content: (detailKey && info[detailKey]) || 'More coming soon.',
      }
    });
  }

  renderFeatures = info => (
    <View style={ss.featuresContainer}>
      {info.pet && (
        <Touchable onPress={() => this.onClickFeature('pet')}>
          <View><FeatureBox category="pet" feature={info.pet} /></View>
        </Touchable>
      )}
      {info.frost && (
        <Touchable onPress={() => this.onClickFeature('frost')}>
          <View><FeatureBox category="frost" feature={info.frost} /></View>
        </Touchable>
      )}
      {info.lifespan && (
        <Touchable onPress={() => this.onClickFeature('lifespan')}>
          <View><FeatureBox category="lifespan" feature={info.lifespan} /></View>
        </Touchable>
      )}
      {info.sun && (
        <Touchable onPress={() => this.onClickFeature('sun')}>
          <View><FeatureBox category="sun" feature={info.sun} /></View>
        </Touchable>
      )}
      {info.thirstiness && (
        <Touchable onPress={() => this.onClickFeature('thirstiness')}>
          <View><FeatureBox category="thirstiness" feature={info.thirstiness} /></View>
        </Touchable>
      )}
      {info.soil && (
        <Touchable onPress={() => this.onClickFeature('soil')}>
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
        {info.timeToHarvest
          && (
          <View style={ss.section}>
            <View style={ss.titleSpacing}>
              <SectionTitle uppercase color="medGray">How long till the harvest?</SectionTitle>
            </View>
            <View style={ss.timeToHarvest}>
              <DetailHeader align="center" color="grass" weight="light">{info.timeToHarvest}</DetailHeader>
            </View>
          </View>
          )
        }
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
          <View style={ss.padded}>
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
