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
 * Para una colección que contiene Credenciales
 * @class 
 */

const CredencialesSchema = Schema({

    nombre_usuario: {
        type: String,
        trim: true,
        min: 6,
        unique: true,
        required: [true, 'El nombre-usuario es necesario']
    },
    pass: {
        type: String,
        min: 8,
        required: [true, 'La contraseña es obligatoria']
    },
    usuario_id: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    codigo_minsa: {
        type: String
    }
});

/**
 * Realiza la eliminación de las propiedades que no se quiren mostrar al regresar la respuesta
 * @function
 */
CredencialesSchema.methods.toJSON = function() {
    let credenciales = this;
    let credencialesObject = credenciales.toObject();
    delete credencialesObject.pass;
    delete credencialesObject.usuario_id;
    delete credencialesObject.codigo_minsa;

    return credencialesObject;
}

CredencialesSchema.plugin(uniqueValidator, { message: '{PAHT} debe ser único' })

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.model('Credenciales', CredencialesSchema);