const express = require("express");
const bookRoutes = require("./routes/book.routes");
const authorRoutes = require("./routes/author.routes");
const notFound = require("./middlewares/notFound.middleware");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

// Global middleware
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);

// 404 handler
app.use(notFound);

// Global error handler
app.use(errorHandler);

module.exports = app;
