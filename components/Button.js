import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import COLORS from '../constants/Colors';
import { ButtonText } from './Type';

const Button = ({
  accessibilityLabel,
  color = 'grass',
  onPress,
  children,
  inverted = false,
  disabled = false,
  style,
}) => {
  const buttonColor = disabled ? 'lightGray' : color;
  const ss = StyleSheet.create({
    buttonStyle: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderWidth: 2,
      borderColor: COLORS[buttonColor],
      ...style,
      backgroundColor: inverted ? COLORS.white : COLORS[buttonColor],
    }
  });
  const accessibilityLabelText = accessibilityLabel || children;
  const accessibilityStates = disabled ? ['disabled'] : [];
  const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  let textColor = 'white';
  if (inverted) textColor = buttonColor;
  return (
    <Touchable
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabelText}
      accessibilityRole="button"
      accessibilityStates={accessibilityStates}
    >
      <View style={ss.buttonStyle}>
        <ButtonText color={textColor}>
          {children}
        </ButtonText>
      </View>
    </Touchable>
  );
};

/* eslint-disable react/require-default-props */
Button.propTypes = {
  color: PropTypes.oneOf([
    'cyan',
    'grass',
    'green',
    'royal',
    'magenta',
    'tangerine',
    'gray',
    'medGray',
    'lightGray',
  ]),
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  accessibilityLabel: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
