/**
 *
 * @fileoverview Quote Controller.
 * @author Hanzell Rivera<hanzellrivera95@gmail.com>
 *
 */

import { request, response } from 'express';
import { validationResult } from 'express-validator';
import MedicalDate from '../models/MedicalDate';


exports.createQuote = async(req = request, res = response) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});


  const {
    datetime,
    cost,
    commission,
    medicalId,
    patientId,
    prediagnosis
  } = req.body;
  
  try {
    const qoute = new MedicalDate({
      datetime,
      cost,
      commission,
      medicalId,
      patientId,
      prediagnosis});

    await qoute.save();

    res.status(200).send({ok: true, msg: 'Cita creada'});
  } catch (error) {
    res.status(500).json({ok: false, msg: error.message});
  }
};