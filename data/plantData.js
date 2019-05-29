import axios from 'axios';
import * as apiConfig from '../config.json';


const request = requestObj => (
  new Promise((resolve, reject) => {
    axios(requestObj)
      .then(response => resolve(response))
      .catch(error => reject(error));
  })
);

export const performGet = (url, params = {}, headers, config = {}) => request({
  params,
  method: 'get',
  url,
  headers,
  config,
});

const getPlantData = () => performGet(
  `${apiConfig.airtable.baseUrl}/Plants?maxRecords=3&view=Grid%20view`,
  {},
  { Authorization: `Bearer ${apiConfig.airtable.key}` },
  {},
);

export default getPlantData;
