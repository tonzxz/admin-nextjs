import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URI;

    if (!mongodbUri) {
      console.error("MongoDB URI not found in environment variables.");
      return;
    }

    await mongoose.connect(mongodbUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};

export default mongoose; // Export the mongoose instance
