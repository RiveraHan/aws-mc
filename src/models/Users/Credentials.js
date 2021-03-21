/**
 * 
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

 const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const CredentialSchema = Schema({

    username: {
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
    }
},
{
    timestamps: true
});

CredentialSchema.methods.toJSON = function() {
    let credenciales = this;
    let credencialesObject = credenciales.toObject();
    delete credencialesObject.pass;

    return credencialesObject;
}

CredentialSchema.plugin(uniqueValidator, { message: '{PAHT} debe ser único' })

module.exports = model('Credentials', CredentialSchema);