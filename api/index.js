const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
 const authRoute = require("./routes/authRoutes");
 const userRoute = require("./routes/usersRoute");
 const movieRoute = require("./routes/moviesRoutes");
const listRoute = require("./routes/listsRoutes");

const cors = require('cors');
const morgan = require('morgan');

dotenv.config();
const port = process.env.PORT;
mongoose
  .connect(process.env.BASE_DATOS2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //  useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(morgan("common")); //Es un middleware para la captura de solicitudes HTTP para Node. js para su posterior registro y seguimientoEs un middleware para la captura de solicitudes HTTP para Node. js para su posterior registro y seguimiento
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(port, () => {
  console.log(`Servidor de RPMAM  esta ejecutando en el puerto ${port}`);
});