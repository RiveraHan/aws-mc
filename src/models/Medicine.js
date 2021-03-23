/**
 * 
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

 const { Schema, model } = require('mongoose');

 const MedicineSchema = Schema({

    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    }, 
    mg: {
        type: Number,
        required: [true, 'La cantidad es necesaria']
    },
    times: {
        type: Number,
        required: false
    },
    quantity: {
        type: Number
    },
    isPrescribed: {
        type: Boolean,
        default: false
    },
    hours: [Date]
 },
 {
    timestamps: true
 });

 module.exports = model('Medicine', MedicineSchema);