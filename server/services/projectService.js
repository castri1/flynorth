const db = require('../models');

exports.createProject = function (project) {
  return db.project.create(project);
};

exports.getProjectsByCompany = function (companyId, includeFacade = false) {
  const query = {
    where: {
      companyId
    }
  };

  if (includeFacade) {
    query.include = [
      { model: db.facade }
    ];
  }

  return db.project.findAll(query);
};