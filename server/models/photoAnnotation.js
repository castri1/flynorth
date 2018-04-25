module.exports = (sequelize, DataTypes) => {
  const PhotoAnnotation = sequelize.define('photoAnnotation', {
    lastUpdated: {
      type: DataTypes.DATE
    },
    data: {
      type: DataTypes.TEXT
    }
  }, {
      freezeTableName: true
    });

  return PhotoAnnotation;
};