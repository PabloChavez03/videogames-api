import axios from "axios";
import { API_KEY } from "../config";
import { IVideogame, IVideogames } from "../utils/types";
import sequelizeDb from "../db";
const { Videogame, Genre } = sequelizeDb.models;

const apiUrl = `https://api.rawg.io/api/games?key=${API_KEY}`;

const apiVideogames = () => {
  return axios
    .get(apiUrl)
    .then((response) => {
      const videogames: IVideogames = response.data;
      const videogamesResponse : IVideogame[] = videogames.results.map((videogame) => {
        return {
          id: videogame.id,
          slug: videogame.slug,
          name: videogame.name,
          released: videogame.released,
          backgroundImage: videogame.background_image,
          rating: videogame.rating,
          ratingTop: videogame.rating_top,
          // platforms: videogame.platforms,
          // genres: videogame.genres,
        };
      });
      return videogamesResponse;
    })
    // .catch((err) => new Error(err));
};

const dbVideogames = () => {
  return Videogame.findAll({
    include : {
      model: Genre,
      attributes: ['name'],
      through: {
        attributes: [],
      }
    }
  })
  .then((data) => {
    return data.map((el) => el.toJSON()); // toJSON convert model in .json represent.
  })
  // .catch((err) => new Error(err));
};

export const allVideogames = async () => {
  const apiGames = await apiVideogames();
  const dbGames = await dbVideogames();
  return apiGames.concat(dbGames);
  }