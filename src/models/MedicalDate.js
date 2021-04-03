/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

import { Schema, model } from 'mongoose';

const MedicalDateSchema = new Schema(
  {
    datetime: Date,
    cost: Number,
    commission: Number,
    medicalId: {
      type: Schema.Types.ObjectId,
      ref: 'Medical',
    },
    patientId: {
      type: Schema.Types.ObjectId,
      ref: 'Patient',
    },
    prediagnosis: {
      type: Schema.Types.ObjectId,
      ref: 'ChatBotResults',
    },
  },
  { timestamps: true }
);

export default model('MedicalDate', MedicalDateSchema);