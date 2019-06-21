import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import STYLE, { space } from '../constants/Styles';
import COLORS from '../constants/Colors';

const ss = StyleSheet.create({
  paperStyle: {
    backgroundColor: COLORS.white,
    padding: space[0],
    ...Platform.select({
      ...STYLE.floating(5),
    }),
  }
});

const Paper = ({ children, style = {} }) => (
  <View style={[ss.paperStyle, style]}>
    {children}
  </View>
);

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default Paper;
