const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

// Routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/userdetails', authMiddleware, authController.userDetails);

module.exports = router;
