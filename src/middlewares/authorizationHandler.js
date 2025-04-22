const jwt = require('jsonwebtoken');
const { AuthConstants } = require("../constants/AuthConstants");
const { HttpStatusCodeConstants } = require("../constants/HttpStatusCodeConstants");

const JWT_SECRET = process.env.JWT_SECRET;

// Extract the token from the Authorization header
// If token is missing, create an Unauthorized error and pass it to next()
// Verify the token using jwt.verify
// If verification fails, create an Unauthorized error and pass it to next()
// Attach decoded user payload to req and call next()
const verifyToken = (req, res, next) => {

};

// Check if decoded user role is not 'Admin'
// If not, create a Forbidden error and pass it to next()
// If user is admin, call next()
const isAdmin = (req, res, next) => {

};

// Extract userId from decoded token
// Extract userId from request body or URL params
// Compare both userIds
// If mismatch, create a Forbidden error and pass it to next()
// If matched, call next()
const checkUserIdMatch = (req, res, next) => {

};

module.exports = { verifyToken, isAdmin, checkUserIdMatch };
