/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Para una colección que contiene Tipo_Paciente
 * @class 
 */
const Tipo_PacienteSchema = Schema({
  referido: {
    type: Boolean,
    default: false,
    required: false

  },
  transferido: {
    type: Boolean,
    default: false,
    required: false

  },
  fecha_referencia: {
    type: Date,
    default: Date.now,
    required: false,

  },
  fallecido: {
    type: Boolean,
    default: false,
    required: false
  },
  fecha_fallecimiento: {
    type: Date,
    default: Date.now
  },
  datos_bebe_id: {
    type: Schema.Types.ObjectId,
    ref: "Datos_bebe",
  }
});

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.model("Tipo_Paciente", Tipo_PacienteSchema);