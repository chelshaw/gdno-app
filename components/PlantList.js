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
        />
      )}
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
};

export default PlantList;
