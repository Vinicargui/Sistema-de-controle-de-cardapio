const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const promisify = require("util");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(422).json({ erro });
  }

  const [, token] = authHeader.split("");

  try {
    const decoded = await promisify(jwt.verify(token, authHeader.secret));
    req.useId = decoded.id;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Invalido" });
  }
};
