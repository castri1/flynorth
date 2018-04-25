module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    isActive: {
      type: DataTypes.BOOLEAN
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
      freezeTableName: true
    });

  User.associate = function (models) {
    User.hasMany(models.project, {
      foreignKey: 'createdBy'
    });
    User.hasMany(models.photoAnnotation, {
      foreignKey: 'lastModifiedBy'
    });
    User.belongsToMany(models.role, {
      through: 'user_role',
      foreignKey: 'userId'
    });
  };
  return User;
};
