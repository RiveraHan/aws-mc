/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Para una colección que contiene Tratamientos_Recibidos
 * @class 
 */
const Valor_NutricionalSchema = Schema({
  peso_7d: {
    type: Number,
    default: 0,
    required: false,
  },
  peso_14d: {
    type: Number,
    default: 0,
    required: false
  },
  peso_21d: {
    type: Number,
    default: 0,
    required: false
  },
  peso_28d: {
    type: Number,
    default: 0,
    required: false
  },
  datos_bebe_id: {
    type: Schema.Types.ObjectId,
    ref: "Datos_bebe",
    required: true
  }
});

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.model("Valor_Nutricional", Valor_NutricionalSchema);