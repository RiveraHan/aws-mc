/**
 * 
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

 const { Schema, model } = require('mongoose');

const MedicalSchema = Schema({

    speciality: {
        type: String,
        required: false
    },
    timetable: {
        type: Array,
        required: false
    },
    credentials: {
        type: Schema.Types.ObjectId,
        ref: 'Credentials',
        required: true
    },
    person: {
        type: Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    }
},
{
    timestamps: true
});

module.exports = model('Medical', MedicalSchema);

