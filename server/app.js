require("dotenv").config();
const express = require('express');
const cors = require('cors');

const app = express();

const userRouter = require("./src/routes/userRoute");
const monophasicRouter = require("./src/routes/monophasicRouter");
const triphasicRouter = require("./src/routes/triphasicRouter");
const washerRouter = require("./src/routes/washerRouter");

//MIDDLEWARES
app.use(cors({origin: true}))
app.use(express.json());

//ROUTES
app.use("/user", userRouter);
app.use("/monophasic", monophasicRouter);
app.use("/triphasic", triphasicRouter);
app.use("/washer", washerRouter);

app.listen(3000, ()=>{
    console.log("Escuchando en el puerto 3000.")
  })