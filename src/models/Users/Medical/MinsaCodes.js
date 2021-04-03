/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

import { Schema, model } from 'mongoose';

const MinsaCodes = new Schema(
  {
    code: {
      type: Number,
      required: true,
    },
    silais: {},
  },
  { timestamps: true }
);

export default model('MinsaCodes', MinsaCodes);
