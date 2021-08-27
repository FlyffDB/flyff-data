const axios = require('axios');
const rateLimit = require('axios-rate-limit');
require('dotenv').config()

const API_ROOT = process.env.FLYFF_API_ROOT;

const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 2000 });

const getApi = async (apiPath, params) => {
  return await http({
    url: API_ROOT + apiPath,
    method: 'GET',
    responseType: 'json',
    params
  });
};

const getApiData = async (dataName, chunks) => {
  const { data: idsResponse } = await getApi(dataName);
  // Convert ids into query strings with a length of specified chunks 
  let groupedIds = [];
  for (let i = 0; i < idsResponse.length; i += chunks) {
    let slicedResponse = idsResponse.slice(i, i + chunks);
    if (slicedResponse.length > 0) groupedIds.push(slicedResponse.reduce((acc, current) => acc += `,${current}`));
  }
  // Grab data in chunks
  let data = [];
  for (let ids of groupedIds) {
    const { data: currentData} = await getApi(`${dataName}/${ids}`);
    data = data.concat(currentData);
  }
  return data;
};

export {
  getApi,
  getApiData
}