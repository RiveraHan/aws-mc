/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

import { Schema, model } from 'mongoose';

const MedicalSchema = new Schema(
  {
    speciality: [String],
    timetable: {
      name: String,
      firtsDW: Date,
      lastDW: Date,
      startingH: Date,
      finishH: Date,
      break: Date,
    },
    personId: {
      type: Schema.Types.ObjectId,
      ref: 'Person',
      required: true,
    },
    minsaSupport: {
      type: Schema.Types.ObjectId,
      ref: 'MinsaCodes',
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Medical', MedicalSchema);
