const { checkSchema } = require('express-validator');
const { RegisterUserValidationConstants } = require("../constants/ValidationConstants");

const loginUserValidationSchema = checkSchema({
  email: {
    in: ['body'],
    normalizeEmail: true,
    isEmail: {
      errorMessage: RegisterUserValidationConstants.EmailInvalid,
    }
  },
  password: {
    in: ['body'],
    trim: true,
    notEmpty: {
      errorMessage: RegisterUserValidationConstants.PasswordNotEmpty,
    },
    isLength: {
      options: { min: 8 },
      errorMessage: RegisterUserValidationConstants.PasswordLength,
    },
  },
});

module.exports = { loginUserValidationSchema };
