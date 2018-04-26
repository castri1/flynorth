const jwt = require('jsonwebtoken');

const { secret } = require('../config/config');

module.exports = function authHandler(req, res, next) {
  const [, token] = req.headers.authorization.split(" ");
  if (!token) {
    res.status(401);
    return res.json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secret, function (err, decoded) {
    if (err) {
      res.status(401);
      return res.json({ message: 'Unauthorized' });
    }
    req.auth = decoded;
    next();
  });
};