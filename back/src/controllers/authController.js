const { createUser, findByEmail, findByUsername, findById } = require('../services/usersRepository');
const { validatePassword } = require('../helpers/validatePassword');
const { generateToken } = require('../helpers/generateToken');

exports.registerUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    const usernameExists = await findByUsername(username);
    const emailExists = await findByEmail(email);

    if (usernameExists) {
      return res.status(400).json({ error: "username already exists" });
    }

    if (emailExists) {
      return res.status(400).json({ error: "email already exists" });
    }

    const user = await createUser(req.body);

    const token = generateToken(user);
    

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findByEmail(email);

    if (!user)
      return res.status(400).json({ error: "Usuario no encontrado" });

    const validPassword = await validatePassword(password, user.password);

    if (!validPassword)
      return res.status(400).json({ error: "Constraseña invalida" });

    const token = generateToken(user);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.authUser = async (req, res) => {
  try {
    const user = await findById(req.username.id);
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un Error" });
  }
};