/**
 *
 * @fileoverview Medical User Controller.
 * @author Hanzell Rivera<hanzellrivera95@gmail.com>
 *
 */

import Person from '../../models/Users/Person';
import Patient from '../../models/Users/Patient/Patient';
import { validationResult } from 'express-validator';
import { request, response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

exports.signup = async (req = request, res = response) => {
  let resultPer, resultPat;

  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const {
    name,
    surname,
    dni,
    phone,
    gender,
    email,
    born,
    address,
    weight,
    blood,
    clinicalStory,
    userName,
    pass,
  } = req.body;

  try {
    const userDB = await Person.findOne({ userName });

    if (userDB)
      return res
        .status(400)
        .json({ msg: 'El usuario ya existe, prueba con uno diferente.' });

    const person = new Person({
      name,
      surname,
      dni,
      phone,
      gender,
      email,
      born,
      address,
      userName,
      pass
    });

    const jump = await bcrypt.genSalt(10);
    person.pass = await bcrypt.hash(pass, jump);
    person.role = 'PATIENT_ROLE'; //add role

    resultPer = await person.save();
    if (resultPer) {
      const personId = resultPer._id;

      const patient = new Patient({
        weight,
        blood,
        personId
      });

      resultPat = await patient.save();
    }
    

    const payload = {
      patientId: resultPat._id,
      personId: resultPer._id,
      name: resultPer.name,
    };

    jwt.sign(
      payload,
      process.env.SEED,
      {
        expiresIn: process.env.EXPIRATION_TOKEN,
      },
      (error) => {
        if (error) throw error;

        return res.status(201).send({
          ok: true,
          msg: 'Registro exitoso.',
        });
      }
    );
  } catch (error) {
    res.status(500).send({ ok: false, msg: error.message });
  }
};
