const { validationResult } = require('express-validator');
const { HttpStatusCodeConstants } = require('../constants/HttpStatusCodeConstants');

// Extract validation errors from the request using validationResult
// If there are validation errors:
  // Map the error messages and join them into a single string
  // Create a new Error object with the combined message
  // Set the status code to Bad Request
  // Pass the error to the next middleware using next()
// If no validation errors, call next() to proceed
function validationErrorHandler (req, res, next) {

};

module.exports.validationErrorHandler = validationErrorHandler;
