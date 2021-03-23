/**
 * 
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const { Schema, model } = require('mongoose');

const MedicalDateSchema = Schema({
    
    datetime: Date,
    cost: Number,
    commission: Number,
    medicalId: {
        type: Schema.Types.ObjectId,
        ref: 'Medical'
    },
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    }
});

module.exports = model('MedicalDate', MedicalDateSchema);