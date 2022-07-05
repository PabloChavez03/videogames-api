import { DataTypes, Sequelize } from "sequelize";

const Videogame = (sql : Sequelize) => {
  sql.define("Videogame", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

export default Videogame;
