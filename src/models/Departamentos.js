/**
 * 
 * @fileoverview Modelo de datos.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Obtiene un array de Departamentos válidos
 * @object 
 */

const Departamentos = {
    values: ['Chinandega', 'León', 'Managua', 'Carazo', 'Masaya', 'Granada', 'Rivas', 'Nueva Segovia', 'Madriz', 'Estelí', 'Jinotega', 'Matagalpa', 'Boaco', 'Chontales', 'Río San Juan'],
    message: '{VALUE} no es un departamento válido'
};

/**
 * Para una colección que contiene Departamentos
 * @class 
 */
const DepartamentosSchema = Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        enum: Departamentos
    }
});

/**
 * Exportamos el esquema para usarlo en la app
 * @module model exportamos su modelo
 */
module.exports = mongoose.model('Departamentos', DepartamentosSchema);