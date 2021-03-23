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
    prediagnosisCHB: {
        type: Schema.Types.ObjectId,
        ref: 'ChatBotResults'
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }
},
{
    timestamps: true
});

module.exports = model('Patient', PatientSchema);