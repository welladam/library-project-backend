const express = require('express');
const { body } = require('express-validator');
const { register, login } = require('../controllers/authController');
const { handleValidationErrors } = require('../helpers/validationHelper');
const router = express.Router();

const validateRegister = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  handleValidationErrors
];

const validateLogin = [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').notEmpty().withMessage('Password is required'),
  handleValidationErrors
];

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

module.exports = router;
