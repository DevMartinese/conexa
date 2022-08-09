const axios = require('axios');

exports.clientAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});