import React from 'react';
import { Image } from 'react-native';
import { Icon } from 'expo';

import COLORS from '../constants/Colors';

const gdnoIcon = require('../assets/images/nav_home_active.png');
const gdnoInactive = require('../assets/images/nav_home_inactive.png');
const cgIcon = require('../assets/images/nav_cg_active.png');
const cgInactive = require('../assets/images/nav_cg_inactive.png');

const TabBarIcon = ({ focused, name, size = 30 }) => {
  if (name === 'home') {
    const logo = focused ? gdnoIcon : gdnoInactive;
    return (
      <Image
        source={logo}
        style={{ width: size, height: size }}
      />
    );
  }
  if (name === 'guide') {
    const logo = focused ? cgIcon : cgInactive;
    return (
      <Image
        source={logo}
        style={{ width: size, height: size }}
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
