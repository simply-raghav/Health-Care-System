// Load environment variables from .env file
require("dotenv").config();

// Import mongoose for MongoDB connection
const mongoose = require("mongoose");

// Connect to MongoDB using the URL from environment variables
mongoose
  .connect(process.env.URL)
  .then(() => {
    // Log message if the connection is successful
    console.log("Database connected");
  })
  .catch((error) => {
    // Log error message and exit the process if connection fails
    console.log(error.message);
    process.exit(1);
  });
