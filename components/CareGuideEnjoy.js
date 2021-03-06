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
} from './Type';
import { careGuideStyles } from '../constants/Styles';
import COLORS from '../constants/Colors';

const ss = StyleSheet.create({
  ...careGuideStyles,
});

const CareGuideEnjoy = ({
  info
}) => {
  if (!info) return <ActivityIndicator />;

  return (
    <View style={{ backgroundColor: COLORS.offWhite }}>
      <View style={ss.topSection}>
        <Header>Enjoy</Header>
        <Body>
        It is time. Congratulations. You and all the living things around you
         have enabled this plant to flourish, and now it&apos;s time for harvest.
          Oh the possibilities! Here&apos;s what to do now.
        </Body>
      </View>

      <View style={ss.section}>
        <View style={ss.titleSpacing}>
          <SectionTitle uppercase color="medGray">Harvest It</SectionTitle>
        </View>

        <Body>{info.howToHarvest || 'Info coming soon!'}</Body>
      </View>

      <View style={ss.section}>
        <View style={ss.titleSpacing}>
          <SectionTitle uppercase color="medGray">Store It</SectionTitle>
        </View>

        <Body>{info.howToStore || 'Info coming soon!'}</Body>
      </View>
    </View>
  );
};

export default CareGuideEnjoy;
