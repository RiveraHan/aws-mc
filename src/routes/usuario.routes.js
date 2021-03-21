const { Router} = require('express');
const router = Router();

const { crearUsuario } = require('../controllers/usuario/usuario.controller');


router.get('/user/register', crearUsuario);

module.exports = router;