import express from "express";
import { bookEvent, getUserBookings } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, bookEvent);
router.get("/", authMiddleware, getUserBookings);

export default router;
