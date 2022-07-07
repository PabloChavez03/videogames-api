import { Router } from "express";
import { getGenres } from "../controllers/genre.controllers";
import { getVideogame, getVideogames } from "../controllers/videogame.controllers";

const router = Router();

router.get('/', getVideogame);
router.get('/videogames', getVideogames);
router.get('/genres', getGenres);

export default router;