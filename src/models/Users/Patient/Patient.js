/**
 * 
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

 const { Schema, model } = require('mongoose');

const PatientSchema = Schema({

    date: {
        type: Date
    },
    prediagnosis: {
        chatbotrts: {} 
    },
    recipe: {
        
    }
},
{
    timestamps: true
});

module.exports = model('Patient', PatientSchema);