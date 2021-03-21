const { Schema, model } = require('mongoose');

const DiseaseSchema = Schema({
    name: {
        type: String
    },
    specialist: {

    },
    suggestedmd: {
        type: Array
    }
});

module.exports = model('Disease', DiseaseSchema);