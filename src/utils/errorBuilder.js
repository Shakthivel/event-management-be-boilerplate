const { HttpStatusCodeConstants } = require("../constants/HttpStatusCodeConstants");

function errorBuilder(message, statusCode = HttpStatusCodeConstants.InternalServerError) {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.isCustom = true;
    return error;
}

module.exports = { errorBuilder }