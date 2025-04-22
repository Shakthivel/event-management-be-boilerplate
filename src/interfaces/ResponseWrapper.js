const { Exception } = require('./Exception');

const ResponseWrapper = {
    responseMessage: "",
    exception: Exception,
    responseData: {}
}

module.exports.ResponseWrapper = ResponseWrapper;
