const express = require('express');
const router = express.Router();
const { createEvent, updateEvent, getAllEvents, getEventById, deleteEvent } = require('../handlers/event.handler');
const { verifyToken, isAdmin } = require("../../middlewares/authorizationHandler");

router.get('/', verifyToken, getAllEvents);
router.get('/:id', verifyToken, getEventById);
router.delete('/:id', verifyToken, isAdmin, deleteEvent);
router.put('/:id', verifyToken, isAdmin, updateEvent);
router.post('/', verifyToken, isAdmin, createEvent);


module.exports = router;
