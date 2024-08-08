import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  available: {
    type: Boolean,
    default: true,
  },
  ratings: [
    {
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
      review: {
        type: String,
      },
    },
  ],
});

export default mongoose.model("product", ProductSchema);
