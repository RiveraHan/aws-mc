
require('dotenv').config();
const jwt = require('jsonwebtoken');


const VerificacionToken = (req, res, next) => {

    const token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    })


};

module.exports = {
    VerificacionToken
}