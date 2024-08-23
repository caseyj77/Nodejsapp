const express = require('express');
const router = express.Router();

// Correct import path for the controller
const learningObjectivesController = require('../controllers/learningObjectivesController');

// Define the route using the controller's method
router.get('/', learningObjectivesController.getLearningObjectives);
router.get('/lerning-objectives', learningObjectivesController.showLearningObjective);

module.exports = router;
