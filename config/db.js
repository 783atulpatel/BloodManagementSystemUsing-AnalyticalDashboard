const mongoose = require("mongoose");
const colors = require("colors");

const MONGODB_URL = "mongodb+srv://admin:123@cluster0.h1vq3so.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch(() => {
      console.log("Could not connect to MongoDB");
    });
};

module.exports = connectDB;