import express from "express";
import {
  getPopularMovies,
  getMovieById,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/popular", getPopularMovies);
router.get("/:id", getMovieById);

export default router;
