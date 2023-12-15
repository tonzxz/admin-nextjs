import mongoose, { Model, Document, Schema } from "mongoose";

// Define the interface for the User document
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

// Define the schema for the User model
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Define the User model with type annotations
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
