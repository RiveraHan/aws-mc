/**
 * 
 * @fileoverview Archivo de configuración de la DB.
 * @author Hanzell Rivera<hanzellrivera95@gmail.com>
 * 
 * Establecemos la conexion con la base de datos y configuramos.
 * Pasamos @param MONGODB_URI a la conexion.
 */

const mongoose = require('mongoose');
const { MONGODB_HOST, MONGODB_DATBASE } = process.env;


process.env.MONGODB_URI = process.env.MONGODB_URI || `mongodb://${MONGODB_HOST}/${MONGODB_DATBASE}`;

mongoose.connect(process.env.MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(db => console.info('**********************************\n\tOk, DB on connect\n**********************************'))
    .catch(err => console.error(err));