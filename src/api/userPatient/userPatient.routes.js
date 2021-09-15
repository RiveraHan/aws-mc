const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userPatientValidation = require('./userPatient.validation');
const userPatientController = require('./userPatient.controller');

const router = express.Router();

router
  .route('/patient')
  .post(validate(userPatientValidation.createUser), userPatientController.createUser)
  .get(auth('getUsers'), validate(userPatientValidation.getUsers), userPatientController.getUsers);

router
  .route('/patient/:userId')
  .get(auth('getUsers'), validate(userPatientValidation.getUser), userPatientController.getUser)
  .patch(auth('manageUsers'), validate(userPatientValidation.updateUser), userPatientController.updateUser)
  .delete(auth('manageUsers'), validate(userPatientValidation.deleteUser), userPatientController.deleteUser);

module.exports = router;
