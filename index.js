/**
 * 
 * @fileoverview Archivo main.
 * @author Hanzell Rivera<hanzellrivera95@gmail.com>
 * 
 */

require('./config/config');
require('./db/database');

/**
 * @export express Es el framework para crear el servidor.
 * @export cors Para poder recibir peticiones de aplicaciones del front.
 * Configuraciones
 */
const express = require('express');
const app = express();
const cors = require('cors');

// Cargar rutas
const route_usuario = require('./routes/usuario')
const route_login = require('./routes/login')
const route_ficha = require('./routes/guardar-ficha')

// cors para las configuraciones de peticiones del frontend
app.use(cors());

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(route_usuario);
app.use(route_login);
app.use(route_ficha);

/**
 *Iniciar el servidor de express
 *Pasamos el port Y host
 * @host host de escucha del servidor
 */
app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Servidor corriendo en ${process.env.HOST}:${process.env.PORT}`);

});