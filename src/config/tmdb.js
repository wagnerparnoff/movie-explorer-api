import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const tmdb = axios.create({
    baseURL: process.env.TMDB_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
});

export default tmdb;