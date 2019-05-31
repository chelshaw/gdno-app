import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { SectionTitle } from './Type';
import SelectIndicator from './SelectIndicator';
import COLORS from '../constants/Colors';
import { space } from '../constants/Styles';

const ListItemWithImage = ({
  imageUrl,
  name,
  selectable = false,
  selected,
  onPress,
}) => {
  const ss = StyleSheet.create({
    outer: {
      paddingHorizontal: space[2],
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: space[2],
      borderBottomWidth: 1,
      borderBottomColor: COLORS.lightGray,
    },
    image: {
      width: 50,
    },
    text: {
      flex: 1,
      paddingHorizontal: space[1],
    },
    indicator: {
      width: 50,
    }
  });
  const accessibilityStates = selectable ? [] : ['disabled'];
  const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  const handleOnPress = () => {
    onPress(name, selected);
  };
  return (
    <Touchable
      onPress={handleOnPress}
      disabled={!selectable}
      accessibilityLabel={name}
      accessibilityRole="button"
      accessibilityStates={accessibilityStates}
      style={ss.outer}
    >
      <View style={ss.item}>
        <View style={ss.image}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{ uri: imageUrl }}
          />
        </View>
        <View style={ss.text}>
          <SectionTitle>
            {name}
          </SectionTitle>
        </View>
        {selectable
          && (
          <View style={ss.indicator}>
            <SelectIndicator selected={selected} />
          </View>
          )
        }
      </View>
    </Touchable>
  );
};

/* eslint-disable react/require-default-props */
ListItemWithImage.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default ListItemWithImage;
