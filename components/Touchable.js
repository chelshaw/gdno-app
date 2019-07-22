import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

const Touchable = ({
  accessibilityLabel,
  onPress,
  disabled = false,
  children,
  returnKey,
  navigation,
}) => {
  let handlePress = () => onPress(returnKey);
  if (typeof onPress === 'string') {
    handlePress = () => navigation.navigate(onPress);
  }
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
  onPress: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]).isRequired,
  children: PropTypes.node.isRequired,
  accessibilityLabel: PropTypes.string,
  disabled: PropTypes.bool,
  returnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(Touchable);
