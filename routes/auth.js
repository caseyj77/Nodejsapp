const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Define the routes and map them to controller functions
router.get('/login', authController.getLogin);
router.get('/signup', authController.getAccount)

module.exports = router;
