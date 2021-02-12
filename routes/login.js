const express = require('express');
const LoginControlador = require('../controllers/login');

const router = express.Router();

router.post('/login', LoginControlador.login);

module.exports = router;