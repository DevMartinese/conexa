const jwt = require('jsonwebtoken');

exports.generateToken = (username) => {
  const payload = {
    username: {
      id: username.id
    }
  }

  const token = jwt.sign(
    payload,
    'frase secreta'
  );

  return token;
}