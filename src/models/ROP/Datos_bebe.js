/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

/**
 * Para una colección que contiene Datos_bebe
 * @class 
 */
const Datos_bebeSchema = Schema({
  numero_expediente: {
    type: Number,
    required: true,
    unique: true
  },
  nombre_bebe: {
    type: String,
    required: true
  },
  fecha_nacimiento: {
    type: Date,
    default: Date.now,
    required: false
  },
  primer_examen_oftalmologico: {
    type: Date,
    default: Date.now,
    required: false
  },
  peso_nacimiento: {
    type: Number,
    required: true
  },
  edad_gestacional: {
    type: Number,
    required: true
  },
  sexo: {
    type: String,
    required: true,
    enum: ['Masculino', 'Femenino', 'masculino', 'femenino']
  },
  raza_blanca: {
    type: Boolean,
    default: false,
    required: false
  },
  tipo_parto: {
    type: String,
    required: false
  },
  parto_multiples: {
    type: Boolean,
    default: false,
    required: false
  },
  apgar1: {
    type: Number,
    match: /0-9/,
    default: 0,
    required: true
  },
  apgar5: {
    type: Number,
    match: /0-9/,
    default: 0,
    required: true
  },
  datos_maternos_id: {
    type: Schema.Types.ObjectId,
    ref: 'Datos_Maternos',
    required: true
  }
});

Datos_bebeSchema.plugin(uniqueValidator, { message: '{PATH}, debe ser único' });

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.model('Datos_bebe', Datos_bebeSchema);