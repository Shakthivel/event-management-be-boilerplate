const { HttpStatusCodeConstants } = require("../constants/HttpStatusCodeConstants");
const { ResponseConstants } = require("../constants/ResponseConstants");
const { ResponseWrapper } = require("../interfaces/ResponseWrapper");

// Determine the status code from the error, default to internal server error if not provided
// Initialize exception object in ResponseWrapper if it doesn't exist
// Set exception details: status code, error message, and stack trace
// Set responseData to null since an error occurred
// Set a generic failure message in responseMessage
// Set the HTTP response status code and send the ResponseWrapper as JSON
function errorHandler(err, req, res, next) {

}

module.exports.errorHandler = errorHandler;
