const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
router.get('/view', profileController.viewProfile);
router.get('/:id', profileController.getProfileById);
module.exports = router;