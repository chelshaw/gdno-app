import React from 'react';
import {
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import ListItemWithImage from './ListItemWithImage';

const PlantList = ({
  plants,
  onPress = () => {},
  selectable = false,
  selectedList = [],
  header = null,
  footer = null,
}) => {
  const handleOnPress = (item) => {
    onPress(item);
  };

  return (
    <FlatList
      data={plants}
      renderItem={({ item }) => (
        <ListItemWithImage
          item={item}
          selectable={selectable}
          onPress={handleOnPress}
          selected={selectable && selectedList.indexOf(item.id) >= 0}
        />
      )}
      ListHeaderComponent={header}
      ListFooterComponent={footer}
    />
  );
};

PlantList.propTypes = {
  plants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
  })).isRequired,
  onPress: PropTypes.func,
  selectable: PropTypes.bool,
  selectedList: PropTypes.arrayOf(PropTypes.string),
  header: PropTypes.node,
  footer: PropTypes.node,
};

export default PlantList;
