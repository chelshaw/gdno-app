import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { WebBrowser } from 'expo';
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
      <Button onPress={handleHelpPress}>Help me</Button>
    </View>
  </View>
);

export default CareGuideIssues;
