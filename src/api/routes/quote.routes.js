import { Router } from 'express';
const router = Router();
import { check } from 'express-validator';

import { createQuote } from '../../controllers/quote';

router.post('/qoute/create',

  [
    check('datetime', 'Agregue una fecha').not().isDate()
  ],
  createQuote
);

export default router;
