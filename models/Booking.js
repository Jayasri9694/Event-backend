import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  bookingDate: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", BookingSchema);
