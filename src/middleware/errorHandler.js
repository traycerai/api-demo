const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Determine if we're in development environment
  const isDevelopment = process.env.NODE_ENV === 'development';

  const errorResponse = {
    success: false,
    error: {
      message,
      ...(isDevelopment && { stack: err.stack })
    }
  };

  // Log error for debugging (in production, you might want to use proper logging service)
  console.error(err);

  // Send error response
  res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;