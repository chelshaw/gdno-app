import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Icon from '@expo/vector-icons';

import { Body } from './Type';
import Touchable from './Touchable';
import ThumbnailWithFallback from './ThumbnailWithFallback';
import SelectIndicator from './SelectIndicator';
import COLORS from '../constants/Colors';
import { space } from '../constants/Styles';

const ListItemWithImage = ({
  item,
  selectable = false,
  selected = false,
  added = false,
  onPress,
  onRemove,
}) => {
  const ss = StyleSheet.create({
    outer: {
      paddingHorizontal: space[1],
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
    imageContainer: {
      width: 50,
    },
    text: {
      flex: 1,
      paddingHorizontal: space[1],
    },
    indicator: {
      width: 50,
    },
    removeButton: {
      paddingHorizontal: space[1],
      paddingVertical: space[0],
    }
  });
  const handleOnPress = () => {
    onPress(item, selected);
  };
  const handleRemove = () => {
    onRemove(item);
  };

  return (
    <Touchable
      onPress={handleOnPress}
      accessibilityLabel={item.name}
      accessibilityRole="button"
      style={ss.outer}
    >
      <View style={ss.item}>
        <View style={ss.imageContainer}>
          <ThumbnailWithFallback imageUrl={item.imageUrl} name={item.name} />
        </View>
        <View style={ss.text}>
          <Body>
            {item.name}
          </Body>
        </View>
        {added && (
          <View style={ss.indicator}>
            <Body italic color="lightGray">Added</Body>
          </View>
        )}
        {selectable && !added
          && (
          <View style={ss.indicator}>
            <SelectIndicator selected={selected} />
          </View>
          )
        }
        {onRemove
          && (
          <Touchable onPress={handleRemove}>
            <View style={ss.removeButton}>
              <Icon.Ionicons
                name="ios-close"
                size={24}
                color={COLORS.gray}
              />
            </View>
          </Touchable>
          )
        }
      </View>
    </Touchable>
  );
};

/* eslint-disable react/require-default-props */
ListItemWithImage.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  added: PropTypes.bool,
};

export default ListItemWithImage;
