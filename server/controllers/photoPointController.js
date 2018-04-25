const photoPointService = require('../services/photoPointService');

exports.getPhotoPointById = async (req, res, next) => {
  const includeAnnotation = (req.query.includeAnnotation || false) == true;
  const photoPoint = await photoPointService.getPhotoPointById(req.params.id, includeAnnotation);
  if (!photoPoint) {
    return next();
  }
  res.json(photoPoint);
};

exports.updatePhotoAnnotation = async (req, res, next) => {
  req.body.lastModifiedBy = req.auth._id;
  req.body.photoPointId = req.params.id;
  const result = await photoPointService.addAnnotation(req.body);
  if (!result) {
    return res.sendStatus(400);
  }
  return res.sendStatus(200);
};