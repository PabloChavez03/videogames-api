import { RequestHandler } from "express"
import sequelizeDb from "../db";
import { apiGenres } from "../services/genre.services";

export const getGenres : RequestHandler = (req,res) => {
  apiGenres()
    .then((data) => {
      return res.status(200).json(data);
    })
}