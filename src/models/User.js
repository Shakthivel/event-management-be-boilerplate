'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'role',
        key: 'role_id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    created_by: {
      type: DataTypes.STRING(100)
    },
    updated_by: {
      type: DataTypes.STRING(100)
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'user',
    timestamps: false,
    defaultScope: {
      where: {
        is_deleted: false
      }
    },
    scopes: {
      withDeleted: {},
      onlyDeleted: {
        where: {
          is_deleted: true
        }
      }
    }
  });

  return User;
};
