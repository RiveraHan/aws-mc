const { Router} = require('express');
const router = Router();

const { crearFicha } = require('../controllers/rop/crear-ficha.controller');


router.post('/user/register', crearFicha);

module.exports = router;