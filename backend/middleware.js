// middleware.js
module.exports = (app) => {
    // Error handling middleware
    app.use((err, req, res, next) => {
      console.error(err);  // Log the error to the console
      res.status(500).json({ error: 'Internal Server Error', message: 'Something went wrong' });
    });
  };
  