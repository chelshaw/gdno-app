import React from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../constants/Colors';
import TabBarIcon from './TabBarIcon';

const ss = StyleSheet.create({
  menuItemStyle: {
    flexGrow: 2,
    alignSelf: 'stretch',
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
  },
  focused: {
    borderBottomWidth: 5,
    borderBottomColor: COLORS.grass,
  }
});

const BottomMenuItem = props => (
  <View style={[ss.menuItemStyle, props.focused && ss.focused]}>
    <TabBarIcon {...props} />
  </View>
);

export default BottomMenuItem;
