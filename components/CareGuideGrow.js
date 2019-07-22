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
import Touchable from './Touchable';
import Paper from './Paper';
import { space, careGuideStyles, verticallyCentered } from '../constants/Styles';
import COLORS from '../constants/Colors';

const ss = StyleSheet.create({
  ...careGuideStyles,
  verticallyCentered,
});

const CareGuideGrow = ({ info }) => {
  if (!info) {
    return (
      <View style={ss.verticallyCentered}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: COLORS.offWhite }}>
      {info.overview
        && (
        <View style={ss.topSection}>
          <Header>Grow</Header>
          <Body>
            Whether you already have a green thumb or this is your first growing
             endeavor, we&apos;re here to guide you!
          </Body>
        </View>
        )
      }
      <View style={ss.section}>
        <View style={ss.titleSpacing}>
          <SectionTitle uppercase color="medGray">Get Started</SectionTitle>
        </View>

        <Paper>
          <Touchable
            onPress="GettingStarted"
            accessibilityLabel="Read our getting started guide"
          >
            <View style={{ paddingVertical: space[3] }}>
              <SectionTitle align="center" color="grass" weight="bold">Read our getting started guide.</SectionTitle>
            </View>
          </Touchable>
        </Paper>
      </View>
      <View style={ss.section}>
        <View style={ss.titleSpacing}>
          <SectionTitle uppercase color="medGray">Standards</SectionTitle>
        </View>

        <View style={ss.titleSpacing}>
          <Paper style={{ paddingVertical: space[3] }}>
            <SectionTitle uppercase align="center" color="medGray" weight="light">Watering</SectionTitle>
          </Paper>
        </View>

        <View style={ss.titleSpacing}>
          <Paper style={{ paddingVertical: space[3] }}>
            <SectionTitle uppercase align="center" color="medGray" weight="light">Feeding my plant</SectionTitle>
          </Paper>
        </View>
        <View style={ss.titleSpacing}>
          <Paper style={{ paddingVertical: space[3] }}>
            <SectionTitle uppercase align="center" color="medGray" weight="light">Sun requirements</SectionTitle>
          </Paper>
        </View>
      </View>
    </View>
  );
};

export default CareGuideGrow;
