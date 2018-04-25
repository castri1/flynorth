module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    name: {
      type: DataTypes.STRING
    }
  }, {
      freezeTableName: true
    });

  Company.associate = function (models) {
    Company.hasMany(models.user, {
      foreignKey: 'companyId'
    });
    Company.hasMany(models.project, {
      foreignKey: 'companyId'
    });
  };
  return Company;
};