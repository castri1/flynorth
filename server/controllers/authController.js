const userService = require('../services/userService');

exports.login = async (req, res, next) => {
  const user = await userService.findUserByEmail(req.body);

  if (!user || !user.isActive) {
    const err = new Error("Invalid credentials");
    err.status = 401;
    return next(err);
  }

  userService.passwordCompare(req.body.password, user.password, userService.login(req, res, next, user));
};