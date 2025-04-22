module.exports = (sequelize, DataTypes) => {
    const Registration = sequelize.define('Registration', {
      registration_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      event_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
      is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    }, {
      tableName: 'registration',
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
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
  
    return Registration;
  };
  