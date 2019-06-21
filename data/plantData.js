import axios from 'axios';

const airtableUrl = ''; // Your personal Airtable API URL
const airtableKey = ''; // Your personal Airtable API Key

const request = requestObj => new Promise((resolve, reject) => {
  axios(requestObj)
    .then(response => resolve(response))
    .catch(error => reject(error));
});

export const performGet = (url, params = {}, headers, config = {}) => request({
  params,
  method: 'get',
  url,
  headers,
  config,
});

const getPlantData = () => performGet(
  `${airtableUrl}/Plants?view=overview`,
  {},
  { Authorization: `Bearer ${airtableKey}` },
  {},
);

export const getPlantDataById = id => performGet(
  `${airtableUrl}/Plants/${id}`,
  {},
  { Authorization: `Bearer ${airtableKey}` },
  {},
);

export default getPlantData;
