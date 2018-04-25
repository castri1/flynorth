const userService = require('../services/userService');


exports.createUser = function createUser(req, res, next) {
  req.body.companyId = req.params.id;
  userService.passwordHash(req.body.password, userService.createUser(req, res, next));
};