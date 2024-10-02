const { Book } = require('../models');

const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ where: { userId: req.userId } });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error searching for books.' });
  }
};

const createBook = async (req, res) => {
  const { title, description, author, year, genre, imageUrl, status = false } = req.body;
  try {
    const newBook = await Book.create({ title, description, author, year, genre, imageUrl, status, userId: req.userId });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Error creating book.' });
  }
};

const updateStatusBook = async (req, res) => {
  const { status } = req.body;
  try {
    const book = await Book.findOne({ where: { id: req.params.id, userId: req.userId } });
    if (!book) {
      return res.status(404).json({ error: 'Book not found.' });
    }
    book.status = status;
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error updating book.' });
  }
};

module.exports = { getBooks, createBook, updateStatusBook };
