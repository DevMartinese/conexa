const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};