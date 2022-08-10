const axios = require('axios');

exports.clientAxios = axios.create({
  baseURL: process.env.JSON_PLACEHOLDER_URL
});