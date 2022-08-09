const { compare } = require('bcrypt');

exports.validatePassword = async (bodyPassword, passwordSaved) => {
  const verifyPassword = await compare(bodyPassword, passwordSaved);
  return verifyPassword;
};