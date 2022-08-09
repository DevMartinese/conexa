const User = require('../models/User');
const { encryptPassword } = require('../helpers/hashPassword');

exports.createUser = async (body) => {
  const newUser = new User(body);
  newUser.password = await encryptPassword(body.password);
  return await newUser.save();
};

exports.findByEmail = async (email) => {
  return await User.findOne({ email });
};

exports.findByUsername = async (username) => {
  return await User.findOne({ username });
};

exports.findById = async (id) => {
  return await User.findById(id).select("-password");
}