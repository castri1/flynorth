module.exports = (sequelize, DataTypes) => {
  const Facade = sequelize.define('facade', {
    name: {
      type: DataTypes.STRING
    },
    createDate: {
      type: DataTypes.DATE
    },
    photoUrl: {
      type: DataTypes.STRING
    }
  }, {
      freezeTableName: true
    });

  Facade.associate = function (models) {
    Facade.hasMany(models.photoPoint, {
      foreignKey: 'facadeId'
    });
  };

  return Facade;
};