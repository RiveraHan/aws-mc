const { Router} = require('express');
const router = Router();

const { login } = require('../controllers/usuario/login.controller');


router.post('/user/login', login);

module.exports = router;