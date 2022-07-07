import { RequestHandler } from "express"
// import axios from "axios";
// import { API_KEY } from "../config";
// import { IVideogames, IVideogame } from "../utils/types";
import sequelizeDb from "../db";
const { Videogame } = sequelizeDb.models

import { allVideogames } from "../services/videogame.services";
import { IVideogame } from "../utils/types";

export const getVideogame: RequestHandler = (req,res) => res.status(200).send('El adn del programador perrin');

export const getVideogames: RequestHandler = (req,res) => {
  allVideogames()
    .then((response) => res.status(200).json(response))
}