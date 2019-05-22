import React from 'react';
import { Image } from 'react-native';
import { Icon } from 'expo';

import COLORS from '../constants/Colors';

const gdnoIcon = require('../assets/images/gdno-icon.png');
const gdnoGrayscale = require('../assets/images/gdno-icon-bw.jpg');

const TabBarIcon = ({ focused, name }) => {
  if (name === 'logo') {
    const logo = focused ? gdnoIcon : gdnoGrayscale;
    return (
      <Image
        source={logo}
        style={{ width: 30, height: 30 }}
      />
    );
  }
  return (
    <Icon.Ionicons
      name={name}
      size={30}
      style={{ marginBottom: -3 }}
      color={focused ? COLORS.tabIconSelected : COLORS.tabIconDefault}
    />
  );
};

export default TabBarIcon;
