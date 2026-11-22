const express = require('express');
const router = express.Router();
const logger = require('../middleware/logger');
const studentController = require('../controllers/studentController');
const profileRoutes = require('./profileRoutes');
router.use(logger);
router.get('/', studentController.getStudents);
router.use('/profile', profileRoutes);
module.exports = router;