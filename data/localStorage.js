import { AsyncStorage } from 'react-native';
import handleError from './handleError';

export const setValue = async (key, value) => {
  let val = value;
  if (!key) throw new Error('No key defined');
  if (typeof value !== 'string') {
    val = JSON.stringify(value);
  }
  try {
    await AsyncStorage.setItem(`@GDNO_${key}`, val);
  } catch (e) {
    throw e;
  }
};

export const getValue = async (key) => {
  let value;
  try {
    value = await AsyncStorage.getItem(`@GDNO_${key}`);
  } catch (e) {
    throw e;
  }
  return JSON.parse(value);
};

export const getMultipleValues = async (keys) => {
  let values;
  try {
    values = await AsyncStorage.multiGet(keys);
  } catch (e) {
    throw e;
  }
  return values.map(v => JSON.parse(v[1]));
};

// FOR DEBUGGING
/* eslint-disable no-unused-vars */
const clearKeys = async () => {
  let keys;
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    handleError(e);
  }
  AsyncStorage.multiRemove(keys, (e) => {
    if (e) handleError(e);
  });
};
