const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userMedicalValidation = require('./userMedical.validation');
const userMedicalController = require('./userMedical.controller');

const router = express.Router();

router
  .route('/medical')
  .post(validate(userMedicalValidation.createUser), userMedicalController.createUser)
  .get(auth('getUsers'), validate(userMedicalValidation.getUsers), userMedicalController.getUsers);

router
  .route('/medical/:userId')
  .get(auth('getUsers'), validate(userMedicalValidation.getUser), userMedicalController.getUser)
  .patch(auth('manageUsers'), validate(userMedicalValidation.updateUser), userMedicalController.updateUser)
  .delete(auth('manageUsers'), validate(userMedicalValidation.deleteUser), userMedicalController.deleteUser);

module.exports = router;
