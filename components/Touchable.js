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
  returnKey,
}) => {
  const handlePress = () => onPress(returnKey);
  const accessibilityStates = disabled ? ['disabled'] : [];
  const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableComponent
      onPress={handlePress}
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
  returnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
};

export default Touchable;
