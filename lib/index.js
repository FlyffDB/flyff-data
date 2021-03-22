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

export {
  getApi
}