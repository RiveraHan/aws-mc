/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Para una colección que contiene Otros_Factores
 * @class 
 */
const Otros_factoresSchema = Schema({
    surfactantes: {
        type: Number,
        default: 0,
        required: false,
    },
    fototerapia: {
        type: Number,
        default: 0,
    },
    transfusiones: {
        type: Number,
        default: 0,
        required: false
    },
    corticoldes_posnatales: {
        type: Number,
        default: 0,
        required: false
    },
    indometacina: {
        type: Number,
        default: 0,
        required: false
    },
    eritroproyetina: {
        type: Number,
        default: 0,
        required: false
    },

    tratamientos_recibidos_id: {
        type: Schema.Types.ObjectId,
        ref: 'Tratamientos_Recibidos',
        required: true
    }
});

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.model('Otros_factores', Otros_factoresSchema);