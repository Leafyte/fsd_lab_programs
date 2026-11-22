const express = require('express');
const router = express.Router();
const marksController = require('../controllers/marksController');
router.get('/view', marksController.viewMarks);
router.get('/:id', marksController.getMarksById);
module.exports = router;