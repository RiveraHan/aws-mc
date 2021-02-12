/**
 * 
 * @fileoverview Archivo de configuración de la DB.
 * @author Hanzell Rivera<hanzellrivera95@gmail.com>
 * 
 * Establecemos la conexion con la base de datos y configuramos.
 * Pasamos @param URL_DB a la conexion.
 */

require('../config/config');
const mongoose = require('mongoose');

/**
 * @function connect realiza la conección con la base de datos
 */
mongoose.connect(process.env.URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw err;
    console.log('mongo connection created');

});

/**
 * @module mongoose exportamos para utilizarlo en el main.
 */
module.exports = mongoose;