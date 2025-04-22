const { HttpStatusCodeConstants } = require("../constants/HttpStatusCodeConstants");
const { ResponseConstants } = require("../constants/ResponseConstants");
const { ResponseWrapper } = require("../interfaces/ResponseWrapper");

// Determine the response status code, default to OK if not already set
// Clear any existing exception by setting it to null
// Set a success message in the responseMessage
// Set the actual response data from res.responseBody
// Set the HTTP response status and send the ResponseWrapper as JSON
function responseHandler(req, res, next) {

}

module.exports.responseHandler = responseHandler;