import Booking from "../models/Booking.js";

export const bookEvent = async (req, res) => {
  try {
    const booking = new Booking({ user: req.user.id, event: req.body.eventId });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate("event");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
