const jwt = require('jsonwebtoken');

const { secret } = require('../config/config');

module.exports = function authHandler(req, res, next) {
  jwt.verify(req.headers.token, secret, function (err, decoded) {
    if (err) {
      res.status(401);
      return res.json({ message: 'Unauthorized' });
    }
    req.auth = decoded;
    next();
  });
};