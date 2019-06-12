import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const Touchable = ({
  accessibilityLabel,
  onPress,
  disabled = false,
  children,
}) => {
  const accessibilityStates = disabled ? ['disabled'] : [];
  const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableComponent
      onPress={() => onPress()}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityStates={accessibilityStates}
    >
      {children}
    </TouchableComponent>
  );
};

Touchable.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  accessibilityLabel: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Touchable;
