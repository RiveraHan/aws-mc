/**
 *
 * @fileoverview Medical User Controller.
 * @author Hanzell Rivera<hanzellrivera95@gmail.com>
 *
 */

import Person from '../../models/Users/Person';
import Patient from '../../models/Users/Patient/Patient';
import Medical from '../../models/Users/Medical/Medical';
import { validationResult } from 'express-validator';
import { request, response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';

exports.signup = async (req = request, res = response) => {
  let resultPer, resultPat;

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
    weight,
    blood,
    // clinicalStory,
    userName,
    pass,
    medicalId
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
      medicalId
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
        personId,
        medicalId
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


exports.patients = async(req = request, res = response) => {
  
  const { medicalId } = req.user;

  try {
    const medicalDB = await Medical.findOne({_id: medicalId});
    if(!medicalDB) return res.status(httpStatus.UNAUTHORIZED).send({ok: false, msg: 'You are not this patients doctor.'});

    const patientsDB = await Patient.find({medicalId});
    
    if(!patientsDB)  return res.status(httpStatus.BAD_REQUEST).send('No patients.');

    return res.status(httpStatus.OK).json({
      ok: true,
      status: 200,
      patientsDB
    });

  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ok: false, msg: error.message});
  }

};
