/**
 * 
 * @fileoverview Integración del API twilio.
 * @author Hanzell Rivera<hanzellrivera95@gmail.com>
 * 
 */

require("dotenv").config();
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN} = process.env;
const cliente = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

/**
 * Esta funcion recibe dos parámetros para poder enviar un SMS
 * @param {String} to Para quien es el mensaje
 * @param {String} body El cuerpo del mensaje
 */

async function enviarMensaje(to, body) {

  try {

    const mensaje = await cliente.messages.create({
      to: to,
      from: "+18288271692",
      body: body
    });

    return mensaje.sid;

  } catch (err) {
    return err;
  }
}

module.exports = enviarMensaje;