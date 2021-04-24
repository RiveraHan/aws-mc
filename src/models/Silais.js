/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Para una colección que contiene Silais
 * @class 
 */

const SilaislasSchema = Schema({
  nombre: {
    type: String,
    unique: true,
    required: true,
  },
});

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.module("Silais", SylasSchema);