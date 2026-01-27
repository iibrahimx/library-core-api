const express = require("express");
const {
  getAllBooks,
  getAllBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");
const protect = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getAllBookById);
router.post("/", protect, createBook);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);

module.exports = router;
