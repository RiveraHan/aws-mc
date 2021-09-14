/**
 *
 * @fileoverview Data Model.
 * @author Hanzell Rivera, Brandon Fonseca<hanzellrivera95@gmail.com,isaac99.bf@gmail.com>
 *
 */

import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const validRoles = {
  values: ['PATIENT_ROLE', 'MEDICAL_ROLE'],
  message: '{VALUE} no es un rol válido'
};

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
      max: [14, 'No puede ser más de 14'],
      min: [14, 'No puede ser menos de 14'],
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    status: {
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
    role: { 
      type: String,
      enum: validRoles, 
      required: true
    }
  },
  {
    timestamps: true,
  }
);

PersonSchema.methods.toJSON = function ()  {
  let person = this;
  let personObject = person.toObject();
  delete personObject.pass;

  return personObject;
};

PersonSchema.plugin(uniqueValidator, { message: '{PATH} dede ser único' });

export default model('Person', PersonSchema);
