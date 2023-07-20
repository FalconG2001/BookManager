import mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 10,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 3,
  },
});
