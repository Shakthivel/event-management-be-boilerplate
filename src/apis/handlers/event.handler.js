const { Event, User, Registration, EventCategory } = require('../../models');
const { HttpStatusCodeConstants } = require('../../constants/HttpStatusCodeConstants');
const { ResponseConstants } = require("../../constants/ResponseConstants");
const { formatEventResponse, getOrCreateCategory } = require('../../utils/eventUtils');
const { register } = require('./auth.handler');

/***
 * TODO: 
 * Get title, description, type, date, time, location, imageUrl from request body
 * Create an event in db using sequelize
 */
const createEvent = async (req, res, next) => {

};

/***
 * TODO: 
 * Get all events from db
 */
const getAllEvents = async (req, res, next) => {

};

/***
 * TODO: 
 * Get event id from request params
 * Get the event from db
 */
const getEventById = async (req, res, next) => {

};

/***
 * TODO: 
 * Get event id from request params
 * update the given event
 */
const updateEvent = async (req, res, next) => {

};

/***
 * TODO: 
 * Get event id from request params
 * Delete the given event
 */
const deleteEvent = async (req, res, next) => {

};

module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
