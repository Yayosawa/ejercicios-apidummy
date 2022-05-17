const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// Rutas
const index = require('./routes/index');
app.use('/', index);

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

