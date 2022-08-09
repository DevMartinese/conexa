const { genSalt, hash } = require('bcrypt');

exports.encryptPassword = async (password) => {
  const salt = await genSalt(10);
  return await hash(password, salt);
}