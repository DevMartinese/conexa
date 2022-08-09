const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/conexa");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};