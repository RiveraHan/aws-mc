/**
 * 
 * @fileoverview Archivo main.
 * @author Hanzell Rivera<hanzellrivera95@gmail.com>
 * 
 */

const Usuario = require('../../db/models/Usuarios/Usuario');
const Credenciales = require('../../db/models/Usuarios/Credenciales');
const Persona = require('../../db/models/Persona');
const Contacto = require('../../db/models/Usuarios/Contacto');
const Municipios = require('../../db/models/Municipios');
const bcrypt = require('bcrypt');

const controller = {

    crearUsuario: async(req, res) => {

        return res.send({
            ok: true,

        });
        try {

            const body = req.body;

            if (!body.nombre || !body.apellidos || !body.dni || !body.email || !body.telefono || !body.nombre_usuario || !body.pass) {
                res.status(400).send({
                    ok: false,
                    message: 'Asegurese de enviar todos los datos'
                });
                return;
            }

            const nuevaPersona = await Persona.create({
                nombre: body.nombre,
                apellidos: body.apellidos,
                dni: body.dni
            });
            const nuevoUsuario = await Usuario.create({
                tipo: body.tipo,
                foto: body.foto,
                estado: body.estado,
                google: body.google,
                persona_id: nuevaPersona._id,
            });

            await Credenciales.create({
                nombre_usuario: body.nombre_usuario,
                pass: bcrypt.hashSync(body.pass, 10),
                usuario_id: nuevoUsuario._id,
                codigo_minsa: body.codigo_minsa
            });

            const bodyMunicipio = body.municipio;
            await Municipios.findOne({ nombre: bodyMunicipio }).exec((err, municipio) => {

                if (err) throw err;

                if (municipio) {

                    const municipio_id = municipio._id;

                    Contacto.create({
                        email: body.email,
                        telefono: body.telefono,
                        municipio_id: municipio_id,
                        persona_id: nuevaPersona._id,
                    });
                }
            });

            return res.status(201).send({
                ok: true,
                usuario: nuevoUsuario,
                message: 'Usuario creado con éxito'
            });


        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
}

module.exports = controller;