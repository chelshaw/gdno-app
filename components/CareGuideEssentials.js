import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  Body,
  Header,
  SectionTitle,
  TextHeader,
  DetailHeader,
} from './Type';
import Paper from './Paper';
import { space, careGuideStyles } from '../constants/Styles';
import COLORS from '../constants/Colors';
import FeatureBox from './FeatureBox';

const ss = StyleSheet.create({
  ...careGuideStyles,
  featuresContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  }
});

const CareGuideEssentials = ({
  info
}) => {
  const renderTTH = (tth) => {
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
        <TextHeader uppercase align="center" color="medGray">{time}</TextHeader>
      </Paper>
    );
  };

  const renderFeatures = () => (
    <View style={ss.featuresContainer}>
      {info.pet && <FeatureBox category="pet" feature={info.pet} />}
      {info.frost && <FeatureBox category="frost" feature={info.frost} />}
      {info.type && (<FeatureBox category="lifespan" feature={info.type} />)}
      {info.sun && (<FeatureBox category="sun" feature={info.sun} />)}
      {info.thirstiness && (<FeatureBox category="water" feature={info.thirstiness} />)}
      {info.soil && (<FeatureBox category="soil" feature={info.soil} />)}
    </View>
  );

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
        {renderTTH(info.timeToHarvest)}
      </View>
      <View style={ss.section}>
        <View style={ss.titleSpacing}>
          <SectionTitle uppercase color="medGray">Features</SectionTitle>
        </View>
        {renderFeatures()}
      </View>
    </View>
  );
};

export default CareGuideEssentials;
