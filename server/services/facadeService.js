const db = require('../models');

exports.createFacade = function createFacade(facade) {
  return db.facade.create(facade);
};

exports.getFacadeById = function getFacadeById(id, includePoints = false) {
  const query = {
    where: {
      id
    }
  };

  if (includePoints) {
    query.include = [
      { models: db.photoPoint }
    ];
  }

  return db.facade.findOne(query);
};