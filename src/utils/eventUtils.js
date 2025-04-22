const { EventCategory } = require('../models');

const formatEventResponse = (event) => {
  return {
    id: event.event_id.toString(),
    title: event.event_name,
    description: event.description,
    type: event.category ? event.category.category_type : null,
    date: event.event_date_time.toISOString().split('T')[0],
    time: event.event_date_time.toTimeString().split(' ')[0].slice(0, 5),
    location: event.location,
    imageUrl: event.thumbnail,
    organizer: event.creator ? {
      id: event.creator.user_id.toString(),
      username: event.creator.username
    } : null,
    registrations: event.registrations ? event.registrations.map(registration => ({
      userId: registration.user_id.toString()
    })) : []
  };
};


async function getOrCreateCategory(categoryName) {
  try {
    let category = await EventCategory.findOne({ where: { category_type: categoryName } });
    
    if (!category) {
      category = await EventCategory.create({ category_type: categoryName });
    }
    
    return category.category_id;
  } catch (error) {
    console.error('Error in getOrCreateCategory:', error);
    throw error;
  }
}

module.exports = { formatEventResponse, getOrCreateCategory };
