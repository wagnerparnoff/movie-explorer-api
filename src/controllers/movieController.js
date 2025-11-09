import { fetchFromTMDB } from "../services/tmdbService.js";

export async function getPopularMovies(req, res) {
  try {
    const data = await fetchFromTMDB("/movie/popular");
    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch popular movies" });
  }
}

export async function getMovieById(req, res) {
  try {
    const { id } = req.params;
    const data = await fetchFromTMDB(`/movie/${id}`);
    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
}
