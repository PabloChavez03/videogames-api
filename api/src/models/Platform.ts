import { DataTypes, Sequelize } from "sequelize";

const Platform = (sql : Sequelize) => {
  sql.define("Platform", {
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
  }, {
    timestamps: false,
  });
};

export default Platform;
