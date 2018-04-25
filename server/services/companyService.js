const db = require('../models');

exports.createCompany = function createCompany(company) {
  return db.company.create(company);
};

exports.findCompanyById = function findCompanyById(id) {
  return db.company.findById(id);
};