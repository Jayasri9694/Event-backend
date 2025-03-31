import express from "express";
import { createEvent, getAllEvents , getEventById} from "../controllers/eventController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createEvent);
router.get("/", getAllEvents);
router.get("/:id", getEventById);

export default router;
