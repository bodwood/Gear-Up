import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    title: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  { timestamps: true }
);