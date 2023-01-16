const express = require("express");
const getRoutes = require("./routes/getRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(getRoutes);

const port = 3333;

app.listen(port, () => {
  console.log("Servidor conectado!");
});
