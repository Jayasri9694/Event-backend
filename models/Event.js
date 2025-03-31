import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  date: Date,
  price: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Event", EventSchema);
