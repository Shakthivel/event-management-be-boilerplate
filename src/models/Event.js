module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
      event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      event_name: DataTypes.STRING,
      description: DataTypes.TEXT,
      event_date_time: DataTypes.DATE,
      duration: DataTypes.INTEGER,
      location: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
      is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    }, {
      tableName: 'event',
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
  
    return Event;
  };
  