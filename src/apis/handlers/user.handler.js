const { Event, User, Registration, EventCategory } = require('../../models');
const { ResponseConstants } = require("../../constants/ResponseConstants");
const { HttpStatusCodeConstants } = require("../../constants/HttpStatusCodeConstants");
const { formatEventResponse } = require('../../utils/eventUtils');

/***
 * TODO: 
 * Get userId from request body
 * Check if there is a user with given userId
 * Return userId, name, email, role if user exist
 * Else throw 404- not found
 */
const getUserById = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const user = await User.findOne({ where: { userId } });
    
        if(!user) {
            const error = new Error(ResponseConstants.User.Error.NotFound);
            error.statusCode = HttpStatusCodeConstants.NotFound;
            throw error;
        }
    
        res.statusCode = HttpStatusCodeConstants.Ok;
        res.responseBody = { userId: user.userId, name: user.username, email: user.email, role: user.role };
        next();
    } catch(error) {
        console.error(`Error while getting an user : ${error.message}`);
        next(error);
    }
}

const getAllEventRegisteredByUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
    
        // TODO: Get all records from Registration where user_id = userId,
        // including related Event, Event.creator (User: user_id, username),
        // Event.registrations (Registration: user_id), and Event.category (EventCategory: category_type)
        const registrations = []
    
        const response = registrations.map(r => formatEventResponse(r.event));
        
        res.statusCode = HttpStatusCodeConstants.Ok;
        res.responseBody = response;
        next();
      } catch (err) {
        console.error(err);
        next(err);
      }
}

module.exports = { getUserById, getAllEventRegisteredByUser };