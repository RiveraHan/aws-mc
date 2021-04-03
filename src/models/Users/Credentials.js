/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CredentialSchema = new Schema(
  {
    userName: {
      type: String,
      trim: true,
      min: 6,
      unique: true,
      required: [true, 'El nombre-usuario es necesario'],
    },
    pass: {
      type: String,
      min: 8,
      required: [true, 'La contraseña es obligatoria'],
    },
  },
  {
    timestamps: true,
  }
);

CredentialSchema.plugin(uniqueValidator, { message: '{PAHT} debe ser único' });

export default model('Credentials', CredentialSchema);
