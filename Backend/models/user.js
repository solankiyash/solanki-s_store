import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export default mongoose.model("User", UserSchema);
