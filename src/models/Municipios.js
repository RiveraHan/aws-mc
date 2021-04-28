/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Para una colección que contiene Municipios
 * @class 
 */
const MunicipiosSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  departamento_id: { type: Schema.Types.ObjectId, ref: 'Departamentos', required: true }
});

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.model('Municipios', MunicipiosSchema);