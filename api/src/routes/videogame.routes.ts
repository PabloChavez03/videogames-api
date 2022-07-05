import { Router } from "express";
import { getVideogame } from "../controllers/videogame.controllers";

const router = Router();

router.get('/', getVideogame);

export default router;