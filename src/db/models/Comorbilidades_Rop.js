/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Para una colección que contiene Comorbilidades
 * @class 
 */
const Comorbilidades_RopSchema = Schema({

    sdr: {
        type: Boolean,
        required: false,
        default: false
    },
    sepsis: {
        type: Boolean,
        required: false,
        default: false
    },
    otras_comorbilidades: {
        any: [{
            nombre: {
                type: String,
                default: null,
                required: false
            }
        }]
    },
    datos_bebe_id: {
        type: Schema.Types.ObjectId,
        ref: 'Datos_bebe',
    }
});

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.model('Comorbilidades_Rop', Comorbilidades_RopSchema);