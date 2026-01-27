const express = require("express");
const {
  getAllBooks,
  getAllBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");
const protect = require("../middlewares/auth.middleware");
const authorizeRoles = require("../middlewares/role.middleware");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getAllBookById);
router.post("/", protect, authorizeRoles("admin"), createBook);
router.put("/:id", protect, authorizeRoles("admin"), updateBook);
router.delete("/:id", protect, authorizeRoles("admin"), deleteBook);

module.exports = router;
