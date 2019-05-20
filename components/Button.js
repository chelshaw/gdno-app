import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import COLORS from '../constants/Colors';
import { ButtonText } from './Type';

const Button = ({
  color = 'grass',
  onPress,
  children,
  inverted = false,
}) => {
  const style = StyleSheet.create({
    buttonStyle: {
      backgroundColor: inverted ? COLORS.white : COLORS[color] || COLORS.grass,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderWidth: inverted ? 2 : 0,
      borderColor: inverted ? COLORS[color] : 'transparent',
    }
  });
  return (
    <TouchableOpacity onPress={onPress} style={style.buttonStyle}>
      <ButtonText color={inverted ? color : 'white'}>{children}</ButtonText>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['tangerine', 'grass', 'green', 'royal', 'cyan', 'magenta', 'gray']),
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
