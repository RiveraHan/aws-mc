import Person from '../../models/Users/Person';
import Medical from '../../models/Users/Medical/Medical';
import Patient from '../../models/Users/Patient/Patient';
import { request, userDBonse } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

exports.auth = async(req = request, res = userDBonse) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});

  try {
    const { userName, pass } = req.body;

    const userDB = await Person.findOne({ userName });

    var id = userDB._id;
    if(userDB.role === 'MEDICAL_ROLE') {
      var medical = await Medical.findOne({personId: id});
    } 
    /* if(userDB.role === 'PATIENT_ROLE'){

      console.log(id);
      var patient = await Patient.findOne({personId: id});
    } */
    
    if (!userDB) {
      return res.status(404).send({
        ok: false,
        msg: 'Usuario o contraseña no existen'
      });
    }
    if (!bcrypt.compareSync(pass, userDB.pass)) {
      return res.status(401).send({
        ok: false,
        err: {
          msg: 'Usuario o contraseña no son conrrectos'
        }
      });

    }

    const payload = {
      personId: id,
      medicalId: medical._id,
      // patientId: patient._id
    };

    jwt.sign({
      payload
    }, process.env.SEED, { expiresIn: process.env.EXPIRATION_TOKEN },
    (error, token) => {
      if (error) throw error;
    
      return res.status(200).send({
        ok: true,
        token,
        msg: 'Login exitoso.',
      });
    }
    );
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }

};
