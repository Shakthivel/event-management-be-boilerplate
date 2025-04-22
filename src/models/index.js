const Sequelize = require('sequelize');
const sequelize = require('../configs/database');

const User = require('./User')(sequelize, Sequelize.DataTypes);
const EventCategory = require('./EventCategory')(sequelize, Sequelize.DataTypes);
const Event = require('./Event')(sequelize, Sequelize.DataTypes);
const Registration = require('./Registration')(sequelize, Sequelize.DataTypes);
const Role = require('./Role')(sequelize, Sequelize.DataTypes);

// Associations
Event.belongsTo(EventCategory, { foreignKey: 'category_id', as: 'category' });
Event.belongsTo(User, { foreignKey: 'created_by', as: 'creator' });
Event.belongsTo(User, { foreignKey: 'updated_by', as: 'updater' });
Event.hasMany(Registration, { foreignKey: 'event_id', as: 'registrations' });

Registration.belongsTo(Event, { foreignKey: 'event_id', as: 'event' });
Registration.belongsTo(User, { foreignKey: 'user_id', as: 'registrant' });
Registration.belongsTo(User, { foreignKey: 'created_by', as: 'createdBy' });
Registration.belongsTo(User, { foreignKey: 'updated_by', as: 'updatedBy' });

User.hasMany(Registration, { foreignKey: 'user_id', as: 'registrations' });
User.hasMany(Event, { foreignKey: 'created_by', as: 'createdEvents' });
User.hasMany(Event, { foreignKey: 'updated_by', as: 'updatedEvents' });

EventCategory.hasMany(Event, { foreignKey: 'category_id', as: 'category' });

// Role-User Association
User.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });
Role.hasMany(User, { foreignKey: 'role_id', as: 'users' });

module.exports = {
  User,
  EventCategory,
  Event,
  Registration,
  Role
};
