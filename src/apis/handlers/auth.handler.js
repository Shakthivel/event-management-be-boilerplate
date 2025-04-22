const bcrypt = require('bcrypt');
const { User, Role } = require('../../models');
const { HttpStatusCodeConstants } = require('../../constants/HttpStatusCodeConstants');
const { ResponseConstants } = require("../../constants/ResponseConstants");
const { generateJwtToken } = require("../../utils/jwtUtils");

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ where: { email } });
    // Throw error if email already exists
    if(existingUser) {
      const error = new Error(ResponseConstants.User.Error.ExistingUser);
      error.statusCode = HttpStatusCodeConstants.UnProcessable;
      throw error;
    }

    // Fetch the default "User" role
    const userRole = await Role.findOne({ where: { role_name: 'User' } });

    // Create user with the default role
    await User.create({ 
      username, 
      email, 
      password: hashedPassword,
      role_id: userRole.role_id,
      created_by: 'System'
    });

    res.statusCode = HttpStatusCodeConstants.Created;
    res.responseBody = { message: ResponseConstants.User.SuccessRegistration };
    next();
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

/***
 * TODO: 
 * Get email and password from request body
 * Use bcrypt to check if password is valid
 * Generate JWT Token using email, password and role_name
 */
const login = async (req, res, next) => {

}

/***
 * TODO: 
 * Get all users from db
 */
const getAll = async (req, res, next) => {

}

module.exports = { register, login, getAll };
