
const express = require('express');
const router = express.Router();
const Answer = require('../models/Answer');

// Create a new answer
router.post('/', async (req, res) => {
  try {
    const newAnswer = new Answer(req.body);
    const savedAnswer = await newAnswer.save();
    res.status(201).json(savedAnswer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get answers by questionId
router.get('/:questionId', async (req, res) => {
  try {
    const answers = await Answer.find({ questionId: req.params.questionId });
    res.json(answers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
