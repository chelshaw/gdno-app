const airtableUrl = ''; // Your personal Airtable API URL
const airtableKey = ''; // Your personal Airtable API Key
import { AsyncStorage } from 'react-native';
import handleError from './handleError';
import { performGet, performMultipleGet } from './restful';
import { getMultipleValues, getValue, setValue } from './localStorage';
import { keyifyName } from '../constants/constants';


const getPlantData = async () => {
  let plantList;
  try {
    const result = await performGet(
      `${airtableUrl}/Plants?view=overview`,
      {},
      { Authorization: `Bearer ${airtableKey}` }
    );
    plantList = result.data.records
      .filter(p => !!p.fields && p.fields.Herb && p.fields.selling)
      .map(p => ({
        name: p.fields.Herb,
        id: p.id,
        key: keyifyName(p.fields.Herb),
        imageUrl: p.fields.images ? p.fields.images[0].thumbnails.large.url : '',
      }));
    console.log(JSON.stringify(plantList));
  } catch (e) {
    throw (e);
  }
  return plantList;
};


export const getPlantDataById = id => performGet(
  `${airtableUrl}/Plants/${id}`,
  {},
  { Authorization: `Bearer ${airtableKey}` },
  {},
);

export const loadStoredPlantByName = async (name) => {
  const key = keyifyName(name);
  let plantInfo;
  try {
    plantInfo = await getValue(key);
  } catch (e) {
    handleError(e);
    throw e;
  }
  return plantInfo;
};

export const loadStoredPlants = async () => {
  let keyList;
  let plantList;
  try {
    keyList = await AsyncStorage.getAllKeys();
    plantList = await getMultipleValues(keyList.filter(k => k !== '@GDNO_plantList'));
  } catch (e) {
    handleError(e);
  }

  if (plantList === null) {
    return [];
  }
  return plantList;
};

const savePlantsToStorage = (plants) => {
  const saveItems = plants.map((plant) => {
    const key = keyifyName(plant.data.fields.Herb);
    const data = {
      ...plant.data.fields,
      id: plant.data.id,
      key,
      name: plant.data.fields.Herb,
      imageUrl: plant.data.fields.images ? plant.data.fields.images[0].thumbnails.large.url : '',
    };
    return setValue(key, data);
  });
  return Promise.all(saveItems);
};

export const getAndSavePlantsToStorage = async (plantIds) => {
  let results;
  const requests = plantIds.map(id => ({
    url: `${airtableUrl}/Plants/${id}`,
    headers: { Authorization: `Bearer ${airtableKey}` },
  }));
  try {
    results = await performMultipleGet(requests);
  } catch (e) {
    handleError(e);
    throw (e);
  }
  return savePlantsToStorage(results);
};

export default getPlantData;
