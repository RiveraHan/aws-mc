/**
 * 
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

 const { Schema, model } = require('mongoose');

 const TimetableSchema = Schema({
     name: {
         type: String
     },
     weekds:{
         type: Date
     },
     weekde: {
         type: Date
     },
     startinghr: {
         type: Date
     },
     endinghr: {
         type: Date
     },
     break: {
         type: Date
     }
 });

 module.exports = model('Timetable', TimetableSchema);