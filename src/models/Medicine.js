/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

import { Schema, model } from "mongoose";

const MedicineSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre de la medicina es necesario"],
    },
    mg: {
      type: Number,
      required: [true, "La cantidad en miligramo es necesaria"],
    },
    times: {
      type: Number,
      required: false,
    },
    quantity: Number,

    isPrescribed: {
      type: Boolean,
      default: false,
    },
    hours: [Date],
  },
  {
    timestamps: true,
  }
);

export default model("Medicine", MedicineSchema);