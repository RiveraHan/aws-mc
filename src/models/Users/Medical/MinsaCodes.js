/**
 * 
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const { Schema, model } = require('mongoose');

const MinsaCodes = Schema({
    code: {
        type: Number,
        required: true
    },
    silais: {
        
    }
});

module.exports = model('MinsaCodes', MinsaCodes);