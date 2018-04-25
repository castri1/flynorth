module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('role', {
    name: {
      type: DataTypes.STRING
    }
  }, {
      freezeTableName: true
    });

  Role.associate = function (models) {
    Role.belongsToMany(models.user, {
      through: 'user_role',
      foreignKey: 'roleId'
    });
  };

  return Role;
};