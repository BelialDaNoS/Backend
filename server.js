const moment = require("moment");
const http = require("http");
const express = require("express");
var log = (p) => console.log(p);
moment.locale("es-mx");

const app = express();

const PORT = 8080;

var visitas = 0;

const server = app.listen(PORT, () => {
  log(`Servidor escuchando en el puerto ${server.address().port}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Bienvenidos al servidor de express</h1>`);
});

app.get("/visitas", (req, res) => {
  res.send(`La cantidad de visitas es ${visitas + 1}`);
  visitas++;
});

app.get("/fyh", (req, res) => {
  res.send({ fyh: `${moment().format("DD [De] MMMM [del] YYYY, h:mm A")}` });
});

server.on("error", (err) => {
  console.error(`=========> ERROR: ${err}`);
});
