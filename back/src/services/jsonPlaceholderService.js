const { clientAxios } = require('../config/axiosConfig');

exports.getPosts = async () => {
  const response = await clientAxios.get('/posts');
  return response.data;
}

exports.getPhotos = async (page) => {
  const offset = +page * 10;
  const limit = 10;
  let response;

  if(page) {
    response = await clientAxios.get(`/photos?_start=${offset}&_limit=${limit}`);
    return response.data;
  }

  response = await clientAxios.get('/photos');
  return response.data;
}