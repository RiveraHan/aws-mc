/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

import { Schema, model } from 'mongoose';

const RecipeSchema = new Schema(
  {
    treatment: [{ type: Schema.Types.ObjectId, ref: 'Medicine' }],

    medicalId: {
      type: Schema.Types.ObjectId,
      ref: 'Medical',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Recipe', RecipeSchema);