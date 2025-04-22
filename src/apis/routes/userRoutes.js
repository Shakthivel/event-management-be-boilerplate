const express = require('express');
const router = express.Router();
const { getUserById, getAllEventRegisteredByUser } = require("../handlers/user.handler");
const { verifyToken, checkUserIdMatch } = require("../../middlewares/authorizationHandler");

router.get('/:userId', verifyToken, checkUserIdMatch, getUserById);
router.get('/events/:userId', verifyToken, getAllEventRegisteredByUser);

module.exports = router;
