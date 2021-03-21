/**
 * 
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

 const { Schema, model } = require('mongoose');

const ChatBotResultSchema = Schema({
    percents: {
        type: Number
    },
    disease: {

    }
}, 
{
    timestamps: true
});

module.exports = model('ChatBotResults', ChatBotResultSchema);