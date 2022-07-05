import express from "express";
import morgan from "morgan";
import routes from "./routes/videogame.routes";

//defined express app
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

//routes
app.use("/", routes)

export default app;
