import Credentials from '../../../models/Users/Credentials';
import { request, response } from 'express';
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

exports.login = async(req = request, res = response) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});

    try {
        const { userName, pass } = req.body;


        const resp = await Credentials.findOne({ userName });
        if (!resp) {
            return res.status(404).send({
                ok: false,
                msg: 'Usuario o contraseña no existen'
            })
        }
        if (!bcrypt.compareSync(pass, resp.pass)) {
            return res.status(401).send({
                ok: false,
                err: {
                    msg: 'Usuario o contraseña no son conrrectos'
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
