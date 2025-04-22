module.exports = (sequelize, DataTypes) => {
    const EventCategory = sequelize.define('EventCategory', {
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      category_type: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    }, {
      tableName: 'event_category',
      timestamps: false
    });
  
    return EventCategory;
  };
  