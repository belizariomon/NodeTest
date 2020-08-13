const express = require('express'); 
const enrutador = require('./Controller/rutas');
const path = require('path');  

require('./config');
  
const app = express();
     
// Para organizar rutas
app.use(enrutador);  

app.listen(process.env.port,
    () => console.log('server run on ', process.env.port)
);
 