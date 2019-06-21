import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import COLORS from '../constants/Colors';
import { ButtonText } from './Type';
import Touchable from './Touchable';

const Button = ({
  accessibilityLabel,
  color = 'grass',
  onPress,
  children,
  inverted = false,
  disabled = false,
  transparent = false,
  style,
}) => {
  const buttonColor = disabled ? 'lightGray' : color;
  const ss = StyleSheet.create({
    buttonStyle: {
      paddingVertical: 16,
      paddingHorizontal: 10,
      borderWidth: 2,
      borderColor: COLORS[buttonColor],
      ...style,
      backgroundColor: inverted ? COLORS.white : COLORS[buttonColor],
    }
  });
  const accessibilityLabelText = accessibilityLabel || children;
  const accessibilityStates = disabled ? ['disabled'] : [];
  let textColor = 'white';
  if (inverted) textColor = buttonColor;
  if (transparent) {
    return (
      <Touchable
        onPress={onPress}
        disabled={disabled}
        accessibilityLabel={accessibilityLabelText}
        accessibilityRole="button"
        accessibilityStates={accessibilityStates}
      >
        {children}
      </Touchable>
    );
  }
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

export const ClearButton = ({ ...props }) => (<Button transparent color="gray" {...props} />);

export default Button;
