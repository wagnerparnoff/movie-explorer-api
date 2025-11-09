import express from "express";
import { getPopularTV } from "../controllers/tvController.js";

const router = express.Router();

router.get("/popular", getPopularTV);

export default router;
