/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

import { Schema, model } from "mongoose";

const PatientSchema = new Schema(
  {
    weight: Number,

    blood: String,

    clinicalStory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Diagnostic",
      },
    ],

    personId: {
      type: Schema.Types.ObjectId,
      ref: "Person",
    },
  },
  {
    timestamps: true,
  }
);

export default model("Patient", PatientSchema);
