/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Para una colección que contiene Hospital
 * @class 
 */
const HospitalSchema = Schema({
  nombre: {
    type: String,
    required: true
  },
  municipio_id: {
    type: Schema.Types.ObjectId,
    ref: 'Municipio',
    required: true
  },
  nombre_sylas_id: {
    type: Schema.Types.ObjectId,
    ref: 'Silais',
    required: true
  }
});

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */

module.exports = mongoose.model('Hospital', HospitalSchema);