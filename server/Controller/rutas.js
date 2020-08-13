const express = require('express');
const app = express();

app.use(require('./routerRestaurante'));  

module.exports = app;