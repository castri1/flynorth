const companyService = require('../services/companyService');

exports.createCompany = async (req, res, next) => {
  const newCompany  = await companyService.createCompany(req.body);
  res.json(newCompany);
};