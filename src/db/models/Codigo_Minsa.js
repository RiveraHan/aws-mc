/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Para una colección que contiene el codigo del minsa
 * @class 
 */
const Codigo_MinsaSchema = Schema({
    codigo: {
        type: String,
        required: true
    },
    hospital_id: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required: false
    },
});

/**
 * @export model exportamos el modelo
 */
module.exports = mongoose.model('Codigo_Minsa', Codigo_MinsaSchema);