import axios from "axios";
import { API_KEY } from "../config";
import { IGenres, IGenre } from "../utils/types";
import sequelizeDb from "../db";
const { Videogame, Genre } = sequelizeDb.models;

const apiUrl = `https://api.rawg.io/api/games?key=${API_KEY}`;

export const apiGenres = () => {
  return axios.get(apiUrl)
    .then((response) => {
      const genres : IGenres = response.data;
      const genresResponse = genres.results.map((genre) => {
        return {
          id: genre.id,
          slug: genre.slug,
          name: genre.name,
          backgroundImage: genre.background_image,
          gamesCount: genre.games_count,
        }
      });
      
      return genresResponse;
    })
    .then((data) => {
      return data.map(el => {
        Genre.findOrCreate({
          where: {
            id: el.id,
          },
          defaults: {
            id: el.id,
            slug: el.slug,
            name: el.name,
            gamesCount: el.gamesCount,
            backgroundImage: el.backgroundImage,
          }
        }).then(([value, isTrue]) => {
          return value.toJSON(); // quede acá
        })
      })
    })
}