
// controllers/learningObjectivesController.js

exports.getLearningObjectives = (req, res) => {
    res.render('show-learning-objectives');
  };


exports.showLearningObjective = (req, res) => {
    res.render('create-learning-objectives');
}
  