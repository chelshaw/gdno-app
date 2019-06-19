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
import { space } from '../constants/Styles';
import COLORS from '../constants/Colors';
import FeatureBox from './FeatureBox';

const ss = StyleSheet.create({
  section: {
    padding: space[2],
  },
  topSection: {
    padding: space[3],
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  titleSpacing: {
    marginBottom: space[1],
  },
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
  const renderTTH = () => (
    <Paper style={{ paddingVertical: space[3] }}>
      <DetailHeader align="center" color="grass" weight="light">2</DetailHeader>
      <TextHeader uppercase align="center" color="medGray">months</TextHeader>
    </Paper>
  );

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
        {renderTTH(info.tth)}
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
