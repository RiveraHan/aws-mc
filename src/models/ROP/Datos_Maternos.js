/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Para una colección que contiene Datos_Maternos
 * @class 
 */
const Datos_MaternosSchema = Schema({
  fecha_registro: {
    type: Date,
    default: Date.now,
  },
  factores_riesgos: {
    type: Boolean,
    default: false,
    required: true
  },
  factores_riesgo_nombre: {
    any: [{
      nombre: {

        type: String,
        default: null,
        required: false
      }
    }]
  },
  antecedentes_rop: {
    type: Boolean,
    default: false,
    required: false
  },
  secuelas_antecedentes: {
    type: Boolean,
    default: false,
    required: false
  },
  secuelas_nombre: {
    any: [{
      nombre: {
        type: String,
        default: null,
        required: false
      }
    }]
  },
  corticoides_antenatales: {
    type: Boolean,
    default: false,
    required: false
  },
  persona_id: {
    type: Schema.Types.ObjectId,
    ref: 'Persona',
    required: true
  }
});

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.model('Datos_Maternos', Datos_MaternosSchema);