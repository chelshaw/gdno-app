import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import COLORS from '../constants/Colors';
import { detailsScreens } from '../constants/constants';
import { NavText } from './Type';

const ss = StyleSheet.create({
  subnav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  navItem: {

  },
  activeNav: {

  }
});

const SubNavMenu = ({
  onPress = () => {},
  active,
}) => {
  const handleOnPress = (tab) => {
    onPress(tab);
  };

  return (
    <View style={ss.subnav}>
      {detailsScreens.map(screen => (
        <View style={ss.navItem}>
          <NavText color={active === screen ? 'grass' : 'medGray'}>
            {screen[0].toUpperCase() + screen.substring(1).toLowerCase()}
          </NavText>
        </View>
      ))}
    </View>
  );
};

SubNavMenu.propTypes = {
  onPress: PropTypes.func,
  active: PropTypes.string,
};

export default SubNavMenu;
