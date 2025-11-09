import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";
import tvRoutes from "./routes/tvRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/movies", movieRoutes);
app.use("/api/tv", tvRoutes);

app.get("/", (req, res) => res.send("TMDB Service API Running"));

export default app;
