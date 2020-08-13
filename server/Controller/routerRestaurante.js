const express = require("express");
const app = express();
const { Restaurantes } = require("../Model/restaurantes");

const restaurantes = new Restaurantes();

// parse application/json
app.use(express.json());
//parsea application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/", (req, res) => {
  let restaurante = req.body.restaurante;
  if (restaurantes.getRestaurante(restaurante.name) === undefined) {
    restaurantes.agregarRestaurante(restaurante);
    res.status(201).json({ result: "Cargado correctamente" });
  } else {
    res
      .status(400)
      .json({ Error: " Ya existe restaurante con el mismo nombre" });
  }
  res.status(400);
});

app.get("/:kindOfRestaurant?", (req, res) => {
  let kindOfRestaurant = req.params.kindOfRestaurant;
  if (kindOfRestaurant !== undefined) {
    res.status(200).json(restaurantes.getRestaurantes());
  } else {
    res.status(200).json(restaurantes.getRestaurantesPorTipo(kindOfRestaurant));
  }
});

module.exports = app;
