import sequelizeDb from "./db";
import app from './app';
import { PORT } from './config'

sequelizeDb.sync({force: true})
  .then(async () => {
    app.listen(PORT, () => {
      console.log('Conexion establecida al puerto', PORT)
    })
  })
  .catch((err) => {
    throw new Error(err)
  });