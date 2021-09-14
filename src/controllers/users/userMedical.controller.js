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
import httpStatus from 'http-status';

exports.signup = async (req = request, res = response) => {
  let resultPer, resultMe;

  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(httpStatus.BAD_REQUEST).json({ errors: errors.array() });

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
        .status(httpStatus.BAD_REQUEST)
        .json({ msg: 'The user already exists, try a different one.' });
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
        return res.status(httpStatus.CREATED).send({
          ok: true,
          status: 201,
          Person: resultPer,
          token,
          msg: 'Successful registration.',
        });
      }
    );
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ ok: false, msg: error.message });
  }
};
