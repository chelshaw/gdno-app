import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DetailHeader } from './Type';
import Button from './Button';
import { space, verticallyCentered } from '../constants/Styles';

const style = StyleSheet.create({
  container: {
    ...verticallyCentered,
  },
  titleContainer: {
    alignSelf: 'center',
    maxWidth: 200,
  },
  buttonContainer: {
    marginVertical: space[3],
    marginHorizontal: space[2],
  }
});

const CareGuideEmptyState = ({ onButtonClick }) => (
  <View style={style.container}>
    <View style={style.titleContainer}>
      <DetailHeader align="center">So what are you growing?</DetailHeader>
    </View>
    <View style={style.buttonContainer}>
      <Button onPress={onButtonClick}>Add Plants</Button>
    </View>
  </View>
);

export default CareGuideEmptyState;
