/**
 * 
 * @fileoverview Integración del API twilio.
 * @author Hanzell Rivera<hanzellrivera95@gmail.com>
 * 
 */

require('../config/config');
const cliente = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

/**
 * Esta funcion recibe dos parámetros para poder enviar un SMS
 * @param {String} to Para quien es el mensaje
 * @param {String} body El cuerpo del mensaje
 */

async function enviarMensaje(to, body) {

    try {

        const mensaje = await cliente.messages.create({
            to: to,
            from: '+18288271692',
            body: body
        });

        return mensaje.sid;

    } catch (err) {
        return err;
    }
}

/**
 * @exports enviarMensaje exportamos la funcion para ser utilizada en la app
 */
module.exports = enviarMensaje;