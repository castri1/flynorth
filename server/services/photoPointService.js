const db = require('../models');

async function getPhotoPointById(id) {
  return db.photoPoint.findById(id);
}

exports.getPhotoPointById = getPhotoPointById;

async function getPhotoAnnotationByPhotoPointId(id) {
  return db.photoAnnotation.findOne({
    where: {
      photoPointId: id
    }
  });
}

exports.addAnnotation = async function addAnnotation(annotation) {
  const photoAnnotation = (await getPhotoAnnotationByPhotoPointId(annotation.photoPointId));
  
  if (!photoAnnotation) {
    const err = new Error('Not found');
    throw err;
  }

  photoAnnotation.lastUpdated = new Date();
  photoAnnotation.data = annotation.data;
  photoAnnotation.lastModifiedBy = annotation.lastModifiedBy;

  return photoAnnotation.save();
};