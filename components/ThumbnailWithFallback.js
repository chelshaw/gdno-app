import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

import COLORS from '../constants/Colors';
import { DetailHeader } from './Type';

const ThumbnailWithFallback = ({
  imageUrl,
  name,
  size = 50,
}) => {
  const ss = StyleSheet.create({
    container: {
      width: size,
      height: size,
    },
    image: {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
    placeholder: {
      backgroundColor: COLORS.grass,
      flex: 1,
      justifyContent: 'center',
    },
  });
  console.log(imageUrl);
  if (!imageUrl) {
    return (
      <View style={ss.container}>
        <View style={[ss.image, ss.placeholder]}>
          <DetailHeader color="white" align="center">{name.substring(0, 1)}</DetailHeader>
        </View>
      </View>
    );
  }
  return (
    <View style={ss.container}>
      <Image
        style={ss.image}
        source={{ uri: imageUrl }}
      />
    </View>
  );
};

export default ThumbnailWithFallback;
