import mongoose from "mongoose";

const foodModel = new mongoose({
  name: String,
  price: Number,
  img_path: String,
  description: String,
  resto_id: mongoose.Schema.Types.ObjectId,
});

export const foodSchema =
  mongoose.models.foods || mongoose.model("foods", foodModel);
