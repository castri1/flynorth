module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    createDate: {
      type: DataTypes.DATE
    },
    address: {
      type: DataTypes.STRING
    },
    photoUrl: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    lat: {
      type: DataTypes.DOUBLE
    },
    long: {
      type: DataTypes.DOUBLE
    }
  }, {
      freezeTableName: true
    });

  Project.associate = function (models) {
    Project.hasMany(models.facade, {
      foreignKey: 'projectId'
    });
  };

  return Project;
};