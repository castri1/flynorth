const facadeService = require('../services/facadeService');

exports.createFacade = async (req, res, next) => {
  req.body.projectId = req.params.id;
  const facade = await facadeService.createFacade(req.body);
  res.json(facade);
};

exports.getFacadeById = async (req, res, next) => {
  const includePoints = (req.query.includePoints || false) == true;
  const facade = facadeService.getFacadeById(req.params.id, includePoints);
  res.json(facade);
};