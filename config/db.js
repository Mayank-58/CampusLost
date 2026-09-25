const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/campuslost");

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed");
    console.log(error.message);
  }
};

module.exports = connectDB;