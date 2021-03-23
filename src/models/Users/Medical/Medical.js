/**
 * 
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const { Schema, model } = require('mongoose');

const MedicalSchema = Schema({

    speciality: [String],
    timetable: {
        name: String,
        firtsDW: Date,
        lastDW: Date,
        startingH: Date,
        finishH: Date,
        break: Date 
    },
    personId: {
        type: Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },
    minsaSupport: {
        type: Schema.Types.ObjectId,
        ref: 'MinsaCodes',
        required: false
    }
},
{
    timestamps: true
});

module.exports = model('Medical', MedicalSchema);

