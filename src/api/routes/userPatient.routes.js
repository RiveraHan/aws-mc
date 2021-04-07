import { Router } from 'express';
const router = Router();
import { check } from 'express-validator';

import { signup } from '../../controllers/users/userPatient.controller';

router.post(
  '/user/signup-patient',
  [
    check('userName', 'El nombre-usuario es obligatorio').not().isEmpty(),
    check('pass', 'El password debe ser minimo de 8 caracteres').isLength({
      min: 8,
    }),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('surname', 'El apellido es obligatorio').not().isEmpty(),
    check('dni', 'El dni(cédula) es obligatorio').isLength({ min: 14 }),
    check('phone', 'El número teléfonico es obligatorio').isMobilePhone(),
    check('born', 'La fecha de nacimiento es necesaria').not().isDate(),
  ],
  signup
);

export default router;
