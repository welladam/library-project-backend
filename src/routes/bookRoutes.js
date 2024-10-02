const express = require('express');
const { body, param } = require('express-validator');
const { getBooks, getBookById, createBook, updateStatusBook, deleteBook } = require('../controllers/bookController');
const authenticateToken = require('../middlewares/authMiddleware');
const { handleValidationErrors } = require('../helpers/validationHelper');
const router = express.Router();

const validateBook = [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('year').isInt().withMessage('Publication year must be a number'),
  body('genre').notEmpty().withMessage('Genre is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('imageUrl').notEmpty().withMessage('Image is required'),
  handleValidationErrors
]

const validateIdParam = [
  param('id').isInt().withMessage('ID must be an integer'),
  handleValidationErrors
]

router.get('/', authenticateToken, getBooks);
router.post('/', authenticateToken, validateBook, createBook);
router.put('/status/:id', authenticateToken, validateIdParam, updateStatusBook);

module.exports = router;
