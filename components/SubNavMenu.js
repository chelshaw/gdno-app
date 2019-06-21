import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import COLORS from '../constants/Colors';
import { detailsScreensArray } from '../constants/constants';
import Touchable from './Touchable';
import { NavText } from './Type';

const ss = StyleSheet.create({
  subnav: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 60,
  },
  navItem: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    paddingVertical: 20,
    flexGrow: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeNav: {
    borderBottomColor: COLORS.grass,
  }
});

const SubNavMenu = ({
  onPress,
  active,
}) => (
  <View style={ss.subnav}>
    {detailsScreensArray.map(screen => (
      <Touchable key={screen} onPress={() => onPress(screen)}>
        <View style={[ss.navItem, active === screen ? ss.activeNav : {}]}>
          <NavText color={active === screen ? 'grass' : 'medGray'}>
            {screen}
          </NavText>
        </View>
      </Touchable>
    ))}
  </View>
);

SubNavMenu.propTypes = {
  onPress: PropTypes.func,
  active: PropTypes.string,
};

export default SubNavMenu;
