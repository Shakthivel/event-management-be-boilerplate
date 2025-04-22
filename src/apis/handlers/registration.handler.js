const { Registration } = require('../../models');
const { HttpStatusCodeConstants } = require('../../constants/HttpStatusCodeConstants');
const { ResponseConstants } = require("../../constants/ResponseConstants");

/***
 * TODO: 
 * Get userId, eventId from request body
 * Check if there is already a registration with given userId, eventId
 * else create a new event registration
 */
const createRegistration = async (req, res, next) => {

};

/***
 * TODO: 
 * Get registrationId from request body
 * Check if there is a registration with given id
 * Delete registration if it exists
 * Else throw 404 - not found error
 */
const deleteRegistration = async (req, res, next) => {

};


module.exports = {createRegistration, deleteRegistration}