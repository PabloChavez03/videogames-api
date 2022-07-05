import { RequestHandler } from "express"

export const getVideogame: RequestHandler = (req,res) => res.status(200).send('El adn del programador perrin');