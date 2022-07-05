import { Sequelize } from "sequelize";
import { DB_NAME, DB_USER, DB_PASSWORD } from "./config";
import Videogame from "./models/Videogame";

const sequelizeDb = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD, {
    logging: false,
    native: false,
    port: 5432,
    dialect: 'postgres',
});

//se crea la tabla del modelo (en models se define)
Videogame(sequelizeDb)

//aqui van las asociaciones



export default sequelizeDb;