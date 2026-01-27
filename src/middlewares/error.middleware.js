// error.middleware.js
const errorHandler = (err, req, res, next) => {
  // Use the status code set in the controller, or default to 500
  // If an error happened and no status code was set, assume it’s a server error.
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    title: getErrorTitle(statusCode),
    message: err.message || "An unexpected error occurred",
    // Only show stack trace in development mode
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

// Helper function to keep the main logic clean
const getErrorTitle = (code) => {
  const titles = {
    400: "Validation Failed",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Resource Not Found",
    500: "Server Error",
  };
  return titles[code] || "Error";
};

module.exports = errorHandler;
