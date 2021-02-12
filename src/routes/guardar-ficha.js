const express = require('express');
const FichaControlador = require('../controllers/guardar-ficha');

const router = express.Router();

router.post('/guardar-ficha', FichaControlador.guadarPaciente);

module.exports = router;