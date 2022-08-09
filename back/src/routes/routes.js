const router = require('express').Router();
const { getPosts, getPhotos } = require('../controllers/jsonPlaceholderController');
const { registerUser, loginUser, authUser } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middlewares/validateSchema');
const { verifyToken } = require('../middlewares/validateToken');

router
  .post('/register', validateRegister, registerUser)
  .post('/login', validateLogin, loginUser)
  .get('/user', verifyToken, authUser)
  .get('/posts', verifyToken, getPosts)
  .get('/photos', verifyToken, getPhotos)

module.exports = router;