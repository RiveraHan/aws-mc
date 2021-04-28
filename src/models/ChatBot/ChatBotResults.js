/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

import { Schema, model } from 'mongoose';

const ChatBotResultSchema = new Schema(
  {
    percent: Number,

    diseaseId: {
      type: Schema.Types.ObjectId,
      ref: 'Disease',
    },
  },
  {
    timestamps: true,
  }
);

export default model('ChatBotResults', ChatBotResultSchema);
