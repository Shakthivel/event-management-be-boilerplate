'use strict';

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    role_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'role',
    timestamps: false
  });

  return Role;
};
