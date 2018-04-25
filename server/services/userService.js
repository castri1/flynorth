const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { secret } = require('../config/config');
const db = require('../models');

function findUserById(id) {
  return db.user.findOne({
    where: {
      id: id
    },
    include: [
      { model: db.role }
    ]
  });
}

function findUserByEmail(email) {
  return db.user.findOne({
    where: {
      email
    },
    include: [
      { model: db.role }
    ]
  });
}

function createUser(user) {
  return db.user.create(user);
}

exports.findUserByEmail = function ({ email }) {
  return findUserByEmail(email.trim().toLowerCase());
};

exports.passwordCompare = function passwordCompare(password, hash, cb) {
  bcrypt.compare(password, hash, cb);
};

exports.passwordHash = function passwordHash(password, cb) {
  bcrypt.hash(password, 10, cb);
};

exports.login = function login(req, res, next, user) {
  return function (err, result) {
    if (err) throw err;

    if (!result) {
      const err = new Error("Invalid credentials");
      err.status = 401;
      return next(err);
    }

    jwt.sign({
      _id: user.id,
      companyId: user.companyId,
      fullName: `${user.name} ${user.lastName}`,
      email: user.email,
      roles: user.roles.map(i => i.name)
    }, secret, {
        expiresIn: '1d'
      }, function (err, token) {
        if (err) throw err;
        res.json({ token });
      });
  }
};

exports.createUser = function (req, res, next) {
  return function (err, encrypted) {
    if (err) {
      next(err);
      return;
    }
    req.body.password = encrypted;
    db.user.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(next);
  }
};