/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Para una colección que contiene Oxigenoterapia
 * @class 
 */
const OxigenoterapiaSchema = Schema({
    ventilacion: {
        type: Number,
        default: 0,
        required: false,
    },
    cpap: {
        type: Number,
        default: 0,
        required: false
    },
    bigotera: {
        type: Number,
        default: 0,
        required: false
    },
    camara_cefalica: {
        type: Number,
        default: 0,
        required: false
    },
    total: {
        type: Number,
        default: 0,
        required: false
    },
    saturacion_o2: {
        any: [{
            porcentaje: {
                type: Number,
                default: 0,
                required: false
            },
            numero_dia: {
                type: Number,
                default: 0,
                required: false
            }
        }]
    },
    datos_bebe_id: {
        type: Schema.Types.ObjectId,
        ref: 'Datos_bebe',
        required: true
    }
});

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.model('Oxigenoterapia', OxigenoterapiaSchema);