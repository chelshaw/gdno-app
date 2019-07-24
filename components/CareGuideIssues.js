import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {
  Body,
  Header,
} from './Type';
import Button from './Button';
import { careGuideStyles } from '../constants/Styles';
import { links } from '../constants/constants';
import COLORS from '../constants/Colors';

const ss = StyleSheet.create({
  main: careGuideStyles.topSection,
  section: careGuideStyles.section,
});

const handleHelpPress = () => {
  WebBrowser.openBrowserAsync(links.help);
};

const CareGuideIssues = () => (
  <View style={{ backgroundColor: COLORS.offWhite }}>
    <View style={ss.main}>
      <Header>Issues</Header>
      <Body>
        If you&apos;re having plant problems I feel bad for you son... but we may know how
         to help! Go ahead and drop us a line -- this is a no judgement grow zone.
      </Body>
    </View>

    <View style={ss.section}>
      {Platform.OS === 'android'
        // TODO: better experience for IOS
        ? <Button onPress={handleHelpPress}>Help me</Button>
        : <Body weight="bold">help@growgardenio.zendesk.com</Body>
      }
    </View>
  </View>
);

export default CareGuideIssues;
