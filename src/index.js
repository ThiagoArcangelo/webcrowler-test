const express = require('express');
const getRoutes = require('./routes/getRoutes');

const app = express();

app.use(getRoutes);

const port = 3333;

app.listen(port, () => {
  console.log('Servidor conectado!');
});