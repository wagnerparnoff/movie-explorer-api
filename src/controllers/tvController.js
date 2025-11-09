import { fetchFromTMDB } from "../services/tmdbService.js";

export async function getPopularTV(req, res) {
  try {
    const data = await fetchFromTMDB("/tv/popular");
    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch popular TV shows" });
  }
}
