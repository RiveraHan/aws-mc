/**
 *
 * @fileoverview Medical User Controller.
 * @author Hanzell Rivera<hanzellrivera95@gmail.com>
 *
 */

import Person from '../../models/Users/Person';
import Medical from '../../models/Users/Medical/Medical';
import { validationResult } from 'express-validator';
import { request, response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

exports.signup = async (req = request, res = response) => {
  let resultPer, resultMe;

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
    speciality,
    minsaSupport,
    timetable,
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
      pass,
    });

    const jump = await bcrypt.genSalt(10);
    person.pass = await bcrypt.hash(pass, jump);
    person.role = 'MEDICAL_ROLE'; //add role

    resultPer = await person.save();
    if (resultPer) {
      const personId = resultPer._id;

      const medical = new Medical({
        speciality,
        minsaSupport,
        timetable,
        personId,
      });

      resultMe = await medical.save();
    }

    const payload = {
      medicalId: resultMe._id,
      personId: resultPer._id,
      name: resultPer.name,
    };

    jwt.sign(
      payload,
      process.env.SEED,
      {
        expiresIn: process.env.EXPIRATION_TOKEN,
      },
      (error, token) => {
        if (error) throw error;

        return res.status(201).send({
          ok: true,
          token,
          msg: 'Registro exitoso.',
        });
      }
    );
  } catch (error) {
    res.status(500).send({ ok: false, msg: error.message });
  }
};