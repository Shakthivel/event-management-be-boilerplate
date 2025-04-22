const express = require('express');
const router = express.Router();
const { register, login, getAll } = require("../handlers/auth.handler");
const { registerUserValidationSchema } = require("../../validators/registerUserValidator");
const { loginUserValidationSchema } = require("../../validators/loginUserValidator");
const { validationErrorHandler } = require("../../middlewares/validationErrorHandler");
const { verifyToken, isAdmin } = require("../../middlewares/authorizationHandler");

router.post('/register', registerUserValidationSchema, validationErrorHandler, register);
router.post('/login', loginUserValidationSchema, validationErrorHandler, login);
router.get('/', verifyToken, isAdmin, getAll);

module.exports = router;
