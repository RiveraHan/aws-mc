/**
 * 
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

 const { Schema, model } = require('mongoose');
 const uniqueValidator = require('mongoose-unique-validator');

const PersonSchema = Schema({

    name: {
        type: String,
        required: [true, 'El nombre es necesario'],
        trim: true
    },
    surname: {
        type: String,
        required: [true, 'El apellido es necesario'],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: false
    },
    dni: {
        type: String,
        unique: true,
        trim: true,
        max: 15,
        min: [15, 'No es un número de cédula correcto'],
        required: false
    },
    photo: {
        type: String,
        required: false
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    born: {
        type: Date,
    },
    phone: {
        type: Number,
        min: [8, 'El número debe ser mayor a siete dígitos']
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: false
    },
    credencialsId: {
        type: Schema.Types.ObjectId,
        ref: 'Credentials',
        required: true
    }
},
{
    timestamps: true
});

PersonSchema.plugin(uniqueValidator, {message: '{PATH} dede ser único'});
module.exports = model('Person', PersonSchema);