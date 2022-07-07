import { Sequelize } from "sequelize";
import { DB_NAME, DB_USER, DB_PASSWORD } from "./config";
import Genre from "./models/Genre";
import Videogame from "./models/Videogame";

const sequelizeDb = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD, {
    logging: false,
    native: false,
    port: 5432,
    dialect: 'postgres',
});

//se crea la tabla del modelo (en models se define)
Videogame(sequelizeDb)
Genre(sequelizeDb);

// console.log(sequelizeDb.models.Videogame)

//aqui van las asociaciones
let auxVideogame = sequelizeDb.model('Videogame');
let auxGenre = sequelizeDb.model('Genre');

const configVideogameGenre = { through : 'Videogame_Genre', timestamps: false }

auxVideogame.belongsToMany(auxGenre, configVideogameGenre);
auxGenre.belongsToMany(auxVideogame, configVideogameGenre);


export default sequelizeDb;