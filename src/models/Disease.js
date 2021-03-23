/**
 * 
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const { Schema, model } = require('mongoose');

const DiseaseSchema = Schema({
    name: String,
    specialist: [String],
    suggestedmd: [{}],
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }
});

module.exports = model('Disease', DiseaseSchema);