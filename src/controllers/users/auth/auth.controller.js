const Credenciales = require('../../db/models/Usuarios/Credenciales');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const controller = {

    login: async(req, res) => {

        try {
            const body = req.body;

            if (!body.nombre_usuario || !body.pass) {
                return res.status(400).send({
                    ok: false,
                    message: 'Asegurese de enviar todos los datos solicitados'
                });
            }

            const resp = await Credenciales.findOne({ nombre_usuario: body.nombre_usuario });
            if (!resp) {
                return res.status(404).send({
                    ok: false,
                    message: 'Usuario no existe'
                })
            }
            if (!bcrypt.compareSync(body.pass, resp.pass)) {
                return res.status(401).send({
                    ok: false,
                    err: {
                        message: 'Usuario o contrasena no son conrrectos'
                    }
                });

            }
            const token = jwt.sign({
                usuario: resp
            }, process.env.SEED, { expiresIn: process.env.EXPIRATION_TOKEN });

            return res.status(200).send({
                ok: true,
                usuario: resp,
                token,
                message: 'Login éxitoso'
            });

        } catch (err) {
            res.status(500).send({ message: err.message });
        }

    }

}

module.exports = controller;