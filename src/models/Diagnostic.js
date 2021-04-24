/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

import { Schema, model } from "mongoose";

const DiagnosticSchema = new Schema(
  {
    date: Date,
    obs: String,
    recipeId: {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
    diseaseId: {
      type: Schema.Types.ObjectId,
      ref: "Disease",
    },
    medicalId: {
      type: Schema.Types.ObjectId,
      ref: "Medical",
    },
  },
  {
    timestamps: true,
  }
);

export default model("Diagnostic", DiagnosticSchema);