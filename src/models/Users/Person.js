/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const PersonSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre es necesario'],
      trim: true,
    },
    surname: {
      type: String,
      required: [true, 'El apellido es necesario'],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: false,
    },
    dni: {
      type: String,
      unique: true,
      trim: true,
      max: [15, 'No puede ser más de 15'],
      min: [15, 'No puede ser menos de 15'],
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
    state: {
      type: Boolean,
      default: true,
    },
    google: {
      type: Boolean,
      default: false,
    },
    born: Date,

    phone: {
      type: Number,
      min: [8, 'El número debe ser mayor a siete dígitos'],
      required: false,
    },
    address: {
      type: String,
      required: false,
      trim: true,
    },
    gender: {
      type: String,
      required: false,
    },
    credencialsId: {
      type: Schema.Types.ObjectId,
      ref: 'Credentials',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

PersonSchema.plugin(uniqueValidator, { message: '{PATH} dede ser único' });

export default model('Person', PersonSchema);
