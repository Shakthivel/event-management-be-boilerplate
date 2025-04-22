const AuthConstants = {
    TokenNotFound: "Token not found in the request",
    InvalidOrExpiredToken: "Invalid or expired token",
    AdminOnly: "Access denied. Admins only resource",
    UserMismatch: "Access denied. Invalid user to perform the action",
    JwtExpiration: "1h"
}

module.exports = { AuthConstants };