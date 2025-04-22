const jwt = require('jsonwebtoken');
const { AuthConstants } = require("../constants/AuthConstants")

function generateJwtToken(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: AuthConstants.JwtExpiration });
    return token;
}

module.exports = { generateJwtToken };