const express = require("express");
const {
  getAllBooks,
  getAllBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getAllBookById);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
