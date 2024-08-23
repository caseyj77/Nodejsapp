// routes/learningObjectiveRoutes.js

const express = require('express');
const router = express.Router();

router.get('/learning-objectives', (req, res) => {
  res.render('create-learning-objectives');
});

module.exports = router;
