/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Para una colección que contiene Tratamientos_Recibidos
 * @class 
 */
const Tratamientos_RecibidosSchema = Schema({
  profilaxis: {
    type: Number,
    required: true,
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
module.exports = mongoose.model('Tratamientos_Recibidos', Tratamientos_RecibidosSchema);