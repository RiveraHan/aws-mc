/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema(
  {
    weight: Number,

    blood: String,

    clinicalStory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Diagnostic',
      },
    ],

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    medicalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medical',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Patient', PatientSchema);
