const express = require('express');
const UsuarioControlador = require('../controllers/usuario');

const router = express.Router();

router.post('/registrar-usuario', UsuarioControlador.guardarUsuario);

module.exports = router;