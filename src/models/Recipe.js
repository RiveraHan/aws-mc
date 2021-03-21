/**
 * 
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

 const { Schema, model } = require('mongoose');

 const RecipeSchema = Schema({
     treatment: {
         type: Array
    },
    medical: {
        type: Schema.Types.ObjectId,
        ref: 'Medical',
        required: true
    }
 });

 module.exports = model('Recipe', RecipeSchema);