const Author = require("../models/author.model");
const Book = require("../models/book.model");

// Get all authors
const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();

    res.status(200).json({
      success: true,
      count: authors.length,
      data: authors,
    });
  } catch (error) {
    next(error);
  }
};

// Get single author + their books
const getAuthorById = async (req, res, next) => {
  try {
    const author = await Author.findById(req.params.id);

    if (!author) {
      return res.status(404).json({
        success: false,
        message: "Author not found",
      });
    }

    // Fetch all books written by this author
    const books = await Book.find({ author: author._id });

    res.status(200).json({
      success: true,
      data: {
        author,
        books,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Create author
const createAuthor = async (req, res, next) => {
  try {
    const author = await Author.create(req.body);

    res.status(201).json({
      success: true,
      message: "Author created successfully",
      data: author,
    });
  } catch (error) {
    next(error);
  }
};

// Update author
const updateAuthor = async (req, res, next) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!author) {
      return res.status(404).json({
        success: false,
        message: "Author not found",
      });
    }

    res.status(200).json({
      success: true,
      data: author,
    });
  } catch (error) {
    next(error);
  }
};

// Delete author
const deleteAuthor = async (req, res, next) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);

    if (!author) {
      return res.status(404).json({
        success: false,
        message: "Author not found",
      });
    }

    // Delete all books by author
    await Book.deleteMany({ author: author._id });

    res.status(200).json({
      success: true,
      message: "Author and related books deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
