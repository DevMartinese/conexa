const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) return res.status(401).json({ error: "Acceso denegado" });
  
  try {
    const verified = jwt.verify(token,"frase secreta");
    req.username = verified.username;
    console.log("TOKEN VERIFICADO", verified.username);
    next();
  } catch (error) {
    res.status(400).json({ error: "Token no valido, acceso denegado" });
  }
}