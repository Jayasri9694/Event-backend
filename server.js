import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.get("/", (req, res) => {
    res.send("welcome to the Event Booking App");
});  
app.use(express.json());
app.use(cors({ 
    origin: ["http://localhost:5173", "https://radiant-pegasus-245097.netlify.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
 }));
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
