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
 * Almacena los roles válidos
 * @Object
 */
const rolesValidos = {
    values: ['ADMIN_ROLE', 'SUPER_ROLE'],
    message: '{VALUE} no es un rol válido'
};

/**
 * Para una colección que contiene Usuario
 * @class 
 */

const UsuarioSchema = Schema({
    tipo: {
        type: String,
        required: true,
        default: 'ADMIN_ROLE',
        enum: rolesValidos
    },
    foto: {
        type: String,
        required: false
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    persona_id: {
        type: Schema.Types.ObjectId,
        ref: 'Persona',
        required: false
    }
});

UsuarioSchema.plugin(uniqueValidator, { message: '{PATH}, debe ser único' });

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.model('Usuario', UsuarioSchema);