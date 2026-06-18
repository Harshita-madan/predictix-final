const mongoose = require("mongoose");
const logger = require("../utils/logger");

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/predictix";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    logger.info(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
