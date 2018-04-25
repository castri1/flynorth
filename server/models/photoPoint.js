module.exports = (sequelize, DataTypes) => {

  const PhotoPoint = sequelize.define('photoPoint', {
    photoUrl: {
      type: DataTypes.STRING
    },
    x: {
      type: DataTypes.DOUBLE
    },
    y: {
      type: DataTypes.DOUBLE
    }
  }, {
      freezeTableName: true
    });

  PhotoPoint.associate = function (models) {
    PhotoPoint.hasMany(models.photoAnnotation, {
      foreignKey: 'photoPointId'
    });
  };

  return PhotoPoint;
};
