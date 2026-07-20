import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) throw new Error("Provide a valid MongoDB Connection String");

async function dbConnector() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database Connected");
  } catch {
    throw new Error("Failed to connect to the database");
  }
}

export default dbConnector;
