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
    medicalId
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
      medicalId
    });

    const jump = await bcrypt.genSalt(10);
    person.pass = await bcrypt.hash(pass, jump);
    person.role = 'PATIENT_ROLE'; //add role

    resultPer = await person.save();
    if (resultPer) {
      const personId = resultPer._id;
      console.log(medicalId);
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


exports.patients = async(req = request, res = response) => {
  
  const { medicalId } = req.user;

  try {
    const medicalDB = await Medical.findOne({_id: medicalId});
    if(!medicalDB) return res.status(401).send({ok: false, msg: 'Usted no es medico de este paciente'});

    const patientsDB = await Patient.find({medicalId});
    
    if(!patientsDB)  return res.status(404).send('No hay pacientes');

    return res.status(200).json({
      ok: true,
      patientsDB
    });

  } catch (error) {
    res.status(500).send({ok: false, msg: error.message});
  }

};
