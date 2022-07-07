import { DataTypes, Sequelize } from "sequelize";

const Genre = (sql : Sequelize) => {
  sql.define("Genre", {
    id: {
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gamesCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    backgroundImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    }
  }, {
    timestamps: false,
  });
};

export default Genre;
