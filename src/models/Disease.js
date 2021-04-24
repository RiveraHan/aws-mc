/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

import { Schema, model } from "mongoose";

const DiseaseSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Es necesario el nombre de la enfermedad"],
    },

    specialist: [String],
    suggestedMedical: [{}],
    recipeId: {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  },
  { timestamps: true }
);

export default model("Disease", DiseaseSchema);
