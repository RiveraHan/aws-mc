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
 * Para una colección que contiene Contacto
 * @class 
 */

const ContactoSchema = Schema({
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: false
    },
    domicilio: {
        type: String,
        trim: true,
        required: false
    },
    telefono: {
        type: String,
        trim: true,
        required: [true, 'El número de telefono es necesario']
    },
    municipio_id: {
        type: Schema.Types.ObjectId,
        ref: 'Municipios',
        required: false
    },
    persona_id: {
        type: Schema.Types.ObjectId,
        ref: 'Persona',
        required: true
    }
});

ContactoSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.model('Contacto', ContactoSchema);