
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


// Setting
app.set('port', process.env.PORT || 3000);

// Cargar rutas
const route_usuario = require('./routes/usuario')
const route_login = require('./routes/login')
const route_ficha = require('./routes/guardar-ficha')

// cors para las configuraciones de peticiones del frontend

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(route_usuario);
app.use(route_login);
app.use(route_ficha);

module.exports = app;