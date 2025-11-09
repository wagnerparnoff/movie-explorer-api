import axios from "axios";
import { TMDB_BASE_URL, TMDB_API_KEY } from "../config/tmdb.js";

export async function fetchFromTMDB(endpoint, params = {}) {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}${endpoint}`, {
      params: { api_key: TMDB_API_KEY, language: "en-US", ...params },
    });
    return response.data;
  } catch (error) {
    console.error(`[TMDB Error]: ${error.message}`);
    throw error;
  }
}
